import type { HelpScoutClient } from '../api/client.js';
import type { Mailbox, Folder, CustomField } from '../types/index.js';

export function registerMailboxTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_mailboxes',
      description: 'List all mailboxes',
      inputSchema: {
        type: 'object',
        properties: {
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
      },
      handler: async (args: any) => {
        const mailboxes = await client.getAllPages<Mailbox>(
          '/mailboxes',
          args,
          'mailboxes'
        );
        return { mailboxes, count: mailboxes.length };
      },
    },
    {
      name: 'helpscout_get_mailbox',
      description: 'Get a mailbox by ID with full details',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Mailbox ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const mailbox = await client.get<Mailbox>(`/mailboxes/${args.id}`);
        return mailbox;
      },
    },
    {
      name: 'helpscout_list_mailbox_folders',
      description: 'List all folders in a mailbox',
      inputSchema: {
        type: 'object',
        properties: {
          mailboxId: { type: 'number', description: 'Mailbox ID' },
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
        required: ['mailboxId'],
      },
      handler: async (args: any) => {
        const folders = await client.getAllPages<Folder>(
          `/mailboxes/${args.mailboxId}/folders`,
          { page: args.page },
          'folders'
        );
        return { folders, count: folders.length };
      },
    },
    {
      name: 'helpscout_get_mailbox_folder',
      description: 'Get a specific folder by ID',
      inputSchema: {
        type: 'object',
        properties: {
          mailboxId: { type: 'number', description: 'Mailbox ID' },
          folderId: { type: 'number', description: 'Folder ID' },
        },
        required: ['mailboxId', 'folderId'],
      },
      handler: async (args: { mailboxId: number; folderId: number }) => {
        const folder = await client.get<Folder>(
          `/mailboxes/${args.mailboxId}/folders/${args.folderId}`
        );
        return folder;
      },
    },
    {
      name: 'helpscout_list_mailbox_fields',
      description: 'List custom fields for a mailbox',
      inputSchema: {
        type: 'object',
        properties: {
          mailboxId: { type: 'number', description: 'Mailbox ID' },
        },
        required: ['mailboxId'],
      },
      handler: async (args: { mailboxId: number }) => {
        const fields = await client.getAllPages<CustomField>(
          `/mailboxes/${args.mailboxId}/fields`,
          {},
          'fields'
        );
        return { fields, count: fields.length };
      },
    },
  ];
}
