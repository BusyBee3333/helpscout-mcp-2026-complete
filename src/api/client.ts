import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import type {
  HelpScoutConfig,
  AccessTokenResponse,
  PaginatedResponse
} from '../types/index.js';

export class HelpScoutClient {
  private config: HelpScoutConfig;
  private client: AxiosInstance;
  private baseURL = 'https://api.helpscout.net/v2';

  constructor(config: HelpScoutConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add auth interceptor
    this.client.interceptors.request.use(async (config) => {
      const token = await this.getAccessToken();
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    // Add error handler
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          const { status, data } = error.response;
          throw new Error(
            `HelpScout API Error (${status}): ${JSON.stringify(data)}`
          );
        }
        throw error;
      }
    );
  }

  private async getAccessToken(): Promise<string> {
    // Check if we have a valid token
    if (this.config.accessToken && this.config.tokenExpiry) {
      if (Date.now() < this.config.tokenExpiry) {
        return this.config.accessToken;
      }
    }

    // Get new token
    const response = await axios.post<AccessTokenResponse>(
      'https://api.helpscout.net/v2/oauth2/token',
      {
        grant_type: 'client_credentials',
        client_id: this.config.appId,
        client_secret: this.config.appSecret,
      }
    );

    this.config.accessToken = response.data.access_token;
    this.config.tokenExpiry = Date.now() + response.data.expires_in * 1000;

    return this.config.accessToken;
  }

  async get<T>(path: string, params?: any): Promise<T> {
    const response = await this.client.get<T>(path, { params });
    return response.data;
  }

  async post<T>(path: string, data?: any): Promise<T> {
    const response = await this.client.post<T>(path, data);
    return response.data;
  }

  async put<T>(path: string, data?: any): Promise<T> {
    const response = await this.client.put<T>(path, data);
    return response.data;
  }

  async patch<T>(path: string, data?: any): Promise<T> {
    const response = await this.client.patch<T>(path, data);
    return response.data;
  }

  async delete(path: string): Promise<void> {
    await this.client.delete(path);
  }

  async *paginate<T>(
    path: string,
    params?: any,
    embedKey?: string
  ): AsyncGenerator<T[], void, unknown> {
    let nextUrl: string | undefined = path;
    let page = 1;

    while (nextUrl) {
      const fullParams = { ...params, page };
      const response = await this.get<PaginatedResponse<T>>(nextUrl, fullParams);

      // Extract items from embedded response
      let items: T[] = [];
      if (response._embedded && embedKey && response._embedded[embedKey]) {
        items = response._embedded[embedKey];
      } else if (Array.isArray(response)) {
        items = response as any;
      }

      yield items;

      // Check for next page
      if (
        response._links?.next &&
        response.page &&
        response.page.number < response.page.totalPages
      ) {
        page++;
      } else {
        nextUrl = undefined;
      }
    }
  }

  async getAllPages<T>(
    path: string,
    params?: any,
    embedKey?: string
  ): Promise<T[]> {
    const allItems: T[] = [];
    for await (const items of this.paginate<T>(path, params, embedKey)) {
      allItems.push(...items);
    }
    return allItems;
  }
}
