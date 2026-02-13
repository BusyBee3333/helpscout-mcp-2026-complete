import type { HelpScoutClient } from '../api/client.js';
import type { Tag } from '../types/index.js';

export function registerTagTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_tags',
      description: 'List all tags in the account',
      inputSchema: {
        type: 'object',
        properties: {
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
      },
      handler: async (args: any) => {
        const tags = await client.getAllPages<Tag>(
          '/tags',
          args,
          'tags'
        );
        return { tags, count: tags.length };
      },
    },
    {
      name: 'helpscout_create_tag',
      description: 'Create a new tag',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Tag name' },
          color: {
            type: 'string',
            description: 'Tag color (hex code, e.g., #FF5733)',
          },
        },
        required: ['name'],
      },
      handler: async (args: { name: string; color?: string }) => {
        const response = await client.post<{ id: number }>('/tags', args);
        return response;
      },
    },
    {
      name: 'helpscout_update_tag',
      description: 'Update a tag (rename or change color)',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Tag ID' },
          name: { type: 'string', description: 'New tag name' },
          color: { type: 'string', description: 'New tag color (hex code)' },
        },
        required: ['id'],
      },
      handler: async (args: any) => {
        const { id, ...updates } = args;
        await client.put(`/tags/${id}`, updates);
        return { success: true, message: 'Tag updated' };
      },
    },
    {
      name: 'helpscout_delete_tag',
      description: 'Delete a tag',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Tag ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        await client.delete(`/tags/${args.id}`);
        return { success: true, message: 'Tag deleted' };
      },
    },
  ];
}
