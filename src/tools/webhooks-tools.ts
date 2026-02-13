import type { HelpScoutClient } from '../api/client.js';
import type { Webhook } from '../types/index.js';

export function registerWebhookTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_webhooks',
      description: 'List all webhooks',
      inputSchema: {
        type: 'object',
        properties: {
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
      },
      handler: async (args: any) => {
        const webhooks = await client.getAllPages<Webhook>(
          '/webhooks',
          args,
          'webhooks'
        );
        return { webhooks, count: webhooks.length };
      },
    },
    {
      name: 'helpscout_get_webhook',
      description: 'Get a webhook by ID',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'Webhook ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: string }) => {
        const webhook = await client.get<Webhook>(`/webhooks/${args.id}`);
        return webhook;
      },
    },
    {
      name: 'helpscout_create_webhook',
      description: 'Create a new webhook',
      inputSchema: {
        type: 'object',
        properties: {
          url: { type: 'string', description: 'Webhook URL' },
          events: {
            type: 'array',
            items: { type: 'string' },
            description: 'Events to subscribe to (e.g., conversation.created)',
          },
          secret: {
            type: 'string',
            description: 'Webhook secret for signature verification',
          },
        },
        required: ['url', 'events'],
      },
      handler: async (args: any) => {
        const response = await client.post<{ id: string }>(
          '/webhooks',
          args
        );
        return response;
      },
    },
    {
      name: 'helpscout_update_webhook',
      description: 'Update a webhook',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'Webhook ID' },
          url: { type: 'string', description: 'New webhook URL' },
          events: {
            type: 'array',
            items: { type: 'string' },
            description: 'New events list',
          },
          state: {
            type: 'string',
            enum: ['enabled', 'disabled'],
            description: 'Webhook state',
          },
        },
        required: ['id'],
      },
      handler: async (args: any) => {
        const { id, ...updates } = args;
        await client.put(`/webhooks/${id}`, updates);
        return { success: true, message: 'Webhook updated' };
      },
    },
    {
      name: 'helpscout_delete_webhook',
      description: 'Delete a webhook',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'Webhook ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: string }) => {
        await client.delete(`/webhooks/${args.id}`);
        return { success: true, message: 'Webhook deleted' };
      },
    },
  ];
}
