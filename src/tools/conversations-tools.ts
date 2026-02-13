import type { HelpScoutClient } from '../api/client.js';
import type { Conversation, Thread } from '../types/index.js';

export function registerConversationTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_conversations',
      description: 'List conversations with optional filters (mailbox, folder, status, tag, assignee, customer)',
      inputSchema: {
        type: 'object',
        properties: {
          mailbox: { type: 'number', description: 'Filter by mailbox ID' },
          folder: { type: 'number', description: 'Filter by folder ID' },
          status: {
            type: 'string',
            enum: ['active', 'pending', 'closed', 'spam'],
            description: 'Filter by status',
          },
          tag: { type: 'string', description: 'Filter by tag name' },
          assignedTo: { type: 'number', description: 'Filter by assigned user ID' },
          customerId: { type: 'number', description: 'Filter by customer ID' },
          query: { type: 'string', description: 'Search query' },
          page: { type: 'number', description: 'Page number (default: 1)' },
          sortField: { type: 'string', description: 'Field to sort by' },
          sortOrder: { type: 'string', enum: ['asc', 'desc'] },
        },
      },
      handler: async (args: any) => {
        const conversations = await client.getAllPages<Conversation>(
          '/conversations',
          args,
          'conversations'
        );
        return { conversations, count: conversations.length };
      },
    },
    {
      name: 'helpscout_get_conversation',
      description: 'Get a conversation by ID with full details',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Conversation ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const conversation = await client.get<Conversation>(`/conversations/${args.id}`);
        return conversation;
      },
    },
    {
      name: 'helpscout_create_conversation',
      description: 'Create a new conversation (email, chat, or phone)',
      inputSchema: {
        type: 'object',
        properties: {
          subject: { type: 'string', description: 'Conversation subject' },
          type: {
            type: 'string',
            enum: ['email', 'chat', 'phone'],
            description: 'Conversation type',
          },
          mailboxId: { type: 'number', description: 'Mailbox ID' },
          status: {
            type: 'string',
            enum: ['active', 'pending', 'closed'],
            description: 'Initial status',
          },
          customerId: { type: 'number', description: 'Customer ID' },
          customerEmail: { type: 'string', description: 'Customer email (if no customerId)' },
          assignTo: { type: 'number', description: 'User ID to assign to' },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Tags to apply',
          },
          threads: {
            type: 'array',
            items: { type: 'object' },
            description: 'Initial threads',
          },
        },
        required: ['subject', 'type', 'mailboxId'],
      },
      handler: async (args: any) => {
        const response = await client.post<{ id: number }>(
          '/conversations',
          args
        );
        return response;
      },
    },
    {
      name: 'helpscout_update_conversation',
      description: 'Update conversation properties (subject, status, assignee, mailbox, etc)',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Conversation ID' },
          op: {
            type: 'string',
            enum: ['replace', 'remove'],
            description: 'Operation type',
          },
          path: {
            type: 'string',
            description: 'Property path (e.g., /subject, /status, /assignTo)',
          },
          value: { description: 'New value for the property' },
        },
        required: ['id', 'op', 'path'],
      },
      handler: async (args: any) => {
        const { id, op, path, value } = args;
        await client.patch(`/conversations/${id}`, { op, path, value });
        return { success: true, message: 'Conversation updated' };
      },
    },
    {
      name: 'helpscout_delete_conversation',
      description: 'Delete a conversation permanently',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Conversation ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        await client.delete(`/conversations/${args.id}`);
        return { success: true, message: 'Conversation deleted' };
      },
    },
    {
      name: 'helpscout_list_conversation_threads',
      description: 'List all threads in a conversation',
      inputSchema: {
        type: 'object',
        properties: {
          conversationId: { type: 'number', description: 'Conversation ID' },
        },
        required: ['conversationId'],
      },
      handler: async (args: { conversationId: number }) => {
        const threads = await client.getAllPages<Thread>(
          `/conversations/${args.conversationId}/threads`,
          {},
          'threads'
        );
        return { threads, count: threads.length };
      },
    },
    {
      name: 'helpscout_create_conversation_reply',
      description: 'Create a reply thread in a conversation',
      inputSchema: {
        type: 'object',
        properties: {
          conversationId: { type: 'number', description: 'Conversation ID' },
          text: { type: 'string', description: 'Reply text (HTML supported)' },
          type: {
            type: 'string',
            enum: ['message', 'reply'],
            description: 'Thread type',
          },
          status: {
            type: 'string',
            enum: ['active', 'pending', 'closed'],
            description: 'Conversation status after reply',
          },
          user: { type: 'number', description: 'User ID sending the reply' },
          attachments: {
            type: 'array',
            items: { type: 'object' },
            description: 'Attachments',
          },
          imported: { type: 'boolean', description: 'Mark as imported (no notifications)' },
        },
        required: ['conversationId', 'text', 'type'],
      },
      handler: async (args: any) => {
        const { conversationId, ...threadData } = args;
        const response = await client.post(
          `/conversations/${conversationId}/threads`,
          threadData
        );
        return response;
      },
    },
    {
      name: 'helpscout_create_conversation_note',
      description: 'Create a private note in a conversation',
      inputSchema: {
        type: 'object',
        properties: {
          conversationId: { type: 'number', description: 'Conversation ID' },
          text: { type: 'string', description: 'Note text (HTML supported)' },
          user: { type: 'number', description: 'User ID creating the note' },
        },
        required: ['conversationId', 'text'],
      },
      handler: async (args: any) => {
        const { conversationId, text, user } = args;
        const response = await client.post(
          `/conversations/${conversationId}/threads`,
          {
            text,
            type: 'note',
            user,
          }
        );
        return response;
      },
    },
    {
      name: 'helpscout_create_conversation_phone',
      description: 'Create a phone thread in a conversation',
      inputSchema: {
        type: 'object',
        properties: {
          conversationId: { type: 'number', description: 'Conversation ID' },
          text: { type: 'string', description: 'Phone call notes' },
          user: { type: 'number', description: 'User ID' },
          phone: { type: 'string', description: 'Phone number' },
        },
        required: ['conversationId', 'text'],
      },
      handler: async (args: any) => {
        const { conversationId, ...threadData } = args;
        const response = await client.post(
          `/conversations/${conversationId}/threads`,
          {
            ...threadData,
            type: 'phone',
          }
        );
        return response;
      },
    },
    {
      name: 'helpscout_update_conversation_tags',
      description: 'Update tags on a conversation (add or remove)',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Conversation ID' },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Tag names to set',
          },
        },
        required: ['id', 'tags'],
      },
      handler: async (args: { id: number; tags: string[] }) => {
        await client.put(`/conversations/${args.id}/tags`, {
          tags: args.tags,
        });
        return { success: true, message: 'Tags updated' };
      },
    },
    {
      name: 'helpscout_change_conversation_status',
      description: 'Change conversation status (active, pending, closed, spam)',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Conversation ID' },
          status: {
            type: 'string',
            enum: ['active', 'pending', 'closed', 'spam'],
            description: 'New status',
          },
        },
        required: ['id', 'status'],
      },
      handler: async (args: { id: number; status: string }) => {
        await client.patch(`/conversations/${args.id}`, {
          op: 'replace',
          path: '/status',
          value: args.status,
        });
        return { success: true, message: `Status changed to ${args.status}` };
      },
    },
    {
      name: 'helpscout_assign_conversation',
      description: 'Assign a conversation to a user',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Conversation ID' },
          userId: { type: 'number', description: 'User ID to assign to' },
        },
        required: ['id', 'userId'],
      },
      handler: async (args: { id: number; userId: number }) => {
        await client.patch(`/conversations/${args.id}`, {
          op: 'replace',
          path: '/assignTo',
          value: args.userId,
        });
        return { success: true, message: 'Conversation assigned' };
      },
    },
  ];
}
