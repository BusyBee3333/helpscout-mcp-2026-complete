import type { HelpScoutClient } from '../api/client.js';
import type { SavedReply } from '../types/index.js';

export function registerSavedReplyTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_saved_replies',
      description: 'List saved replies with optional filters',
      inputSchema: {
        type: 'object',
        properties: {
          mailboxId: { type: 'number', description: 'Filter by mailbox ID' },
          userId: { type: 'number', description: 'Filter by user ID' },
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
      },
      handler: async (args: any) => {
        const replies = await client.getAllPages<SavedReply>(
          '/saved-replies',
          args,
          'replies'
        );
        return { replies, count: replies.length };
      },
    },
    {
      name: 'helpscout_get_saved_reply',
      description: 'Get a saved reply by ID',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Saved reply ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const reply = await client.get<SavedReply>(`/saved-replies/${args.id}`);
        return reply;
      },
    },
    {
      name: 'helpscout_create_saved_reply',
      description: 'Create a new saved reply',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Reply name/title' },
          text: { type: 'string', description: 'Reply text (HTML supported)' },
          mailboxId: {
            type: 'number',
            description: 'Mailbox ID (for mailbox-specific reply)',
          },
          userId: {
            type: 'number',
            description: 'User ID (for user-specific reply)',
          },
        },
        required: ['name', 'text'],
      },
      handler: async (args: any) => {
        const response = await client.post<{ id: number }>(
          '/saved-replies',
          args
        );
        return response;
      },
    },
    {
      name: 'helpscout_update_saved_reply',
      description: 'Update a saved reply',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Saved reply ID' },
          name: { type: 'string', description: 'New name' },
          text: { type: 'string', description: 'New text' },
        },
        required: ['id'],
      },
      handler: async (args: any) => {
        const { id, ...updates } = args;
        await client.put(`/saved-replies/${id}`, updates);
        return { success: true, message: 'Saved reply updated' };
      },
    },
    {
      name: 'helpscout_delete_saved_reply',
      description: 'Delete a saved reply',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Saved reply ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        await client.delete(`/saved-replies/${args.id}`);
        return { success: true, message: 'Saved reply deleted' };
      },
    },
  ];
}
