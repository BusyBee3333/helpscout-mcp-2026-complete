import type { HelpScoutClient } from '../api/client.js';
import type { User } from '../types/index.js';

export function registerUserTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_users',
      description: 'List all users in the account',
      inputSchema: {
        type: 'object',
        properties: {
          page: { type: 'number', description: 'Page number (default: 1)' },
          email: { type: 'string', description: 'Filter by email' },
        },
      },
      handler: async (args: any) => {
        const users = await client.getAllPages<User>(
          '/users',
          args,
          'users'
        );
        return { users, count: users.length };
      },
    },
    {
      name: 'helpscout_get_user',
      description: 'Get a user by ID with full details',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'User ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const user = await client.get<User>(`/users/${args.id}`);
        return user;
      },
    },
    {
      name: 'helpscout_get_current_user',
      description: 'Get the resource owner (current authenticated user)',
      inputSchema: {
        type: 'object',
        properties: {},
      },
      handler: async () => {
        const user = await client.get<User>('/users/me');
        return user;
      },
    },
  ];
}
