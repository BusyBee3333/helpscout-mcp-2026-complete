import type { HelpScoutClient } from '../api/client.js';
import type {
  CompanyReport,
  ConversationReport,
  HappinessReport,
  ProductivityReport,
  UserReport,
} from '../types/index.js';

export function registerReportingTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_get_company_report',
      description: 'Get company overview report (conversations, customers, happiness, response times)',
      inputSchema: {
        type: 'object',
        properties: {
          start: {
            type: 'string',
            description: 'Start date (YYYY-MM-DD)',
          },
          end: {
            type: 'string',
            description: 'End date (YYYY-MM-DD)',
          },
          previousStart: {
            type: 'string',
            description: 'Previous period start (for comparison)',
          },
          previousEnd: {
            type: 'string',
            description: 'Previous period end (for comparison)',
          },
          mailboxes: {
            type: 'array',
            items: { type: 'number' },
            description: 'Filter by mailbox IDs',
          },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Filter by tags',
          },
        },
        required: ['start', 'end'],
      },
      handler: async (args: any) => {
        const report = await client.get<CompanyReport>(
          '/reports/company',
          args
        );
        return report;
      },
    },
    {
      name: 'helpscout_get_conversations_report',
      description: 'Get conversations report (volume, trends, busiest times)',
      inputSchema: {
        type: 'object',
        properties: {
          start: {
            type: 'string',
            description: 'Start date (YYYY-MM-DD)',
          },
          end: {
            type: 'string',
            description: 'End date (YYYY-MM-DD)',
          },
          previousStart: {
            type: 'string',
            description: 'Previous period start (for comparison)',
          },
          previousEnd: {
            type: 'string',
            description: 'Previous period end (for comparison)',
          },
          mailboxes: {
            type: 'array',
            items: { type: 'number' },
            description: 'Filter by mailbox IDs',
          },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Filter by tags',
          },
          folders: {
            type: 'array',
            items: { type: 'number' },
            description: 'Filter by folder IDs',
          },
        },
        required: ['start', 'end'],
      },
      handler: async (args: any) => {
        const report = await client.get<ConversationReport>(
          '/reports/conversations',
          args
        );
        return report;
      },
    },
    {
      name: 'helpscout_get_happiness_report',
      description: 'Get happiness report (ratings, scores, sentiment)',
      inputSchema: {
        type: 'object',
        properties: {
          start: {
            type: 'string',
            description: 'Start date (YYYY-MM-DD)',
          },
          end: {
            type: 'string',
            description: 'End date (YYYY-MM-DD)',
          },
          previousStart: {
            type: 'string',
            description: 'Previous period start (for comparison)',
          },
          previousEnd: {
            type: 'string',
            description: 'Previous period end (for comparison)',
          },
          mailboxes: {
            type: 'array',
            items: { type: 'number' },
            description: 'Filter by mailbox IDs',
          },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Filter by tags',
          },
        },
        required: ['start', 'end'],
      },
      handler: async (args: any) => {
        const report = await client.get<HappinessReport>(
          '/reports/happiness',
          args
        );
        return report;
      },
    },
    {
      name: 'helpscout_get_productivity_report',
      description: 'Get productivity report (replies sent, resolution time, response time)',
      inputSchema: {
        type: 'object',
        properties: {
          start: {
            type: 'string',
            description: 'Start date (YYYY-MM-DD)',
          },
          end: {
            type: 'string',
            description: 'End date (YYYY-MM-DD)',
          },
          previousStart: {
            type: 'string',
            description: 'Previous period start (for comparison)',
          },
          previousEnd: {
            type: 'string',
            description: 'Previous period end (for comparison)',
          },
          mailboxes: {
            type: 'array',
            items: { type: 'number' },
            description: 'Filter by mailbox IDs',
          },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Filter by tags',
          },
        },
        required: ['start', 'end'],
      },
      handler: async (args: any) => {
        const report = await client.get<ProductivityReport>(
          '/reports/productivity',
          args
        );
        return report;
      },
    },
    {
      name: 'helpscout_get_user_report',
      description: 'Get report for a specific user (performance, activity)',
      inputSchema: {
        type: 'object',
        properties: {
          userId: {
            type: 'number',
            description: 'User ID to report on',
          },
          start: {
            type: 'string',
            description: 'Start date (YYYY-MM-DD)',
          },
          end: {
            type: 'string',
            description: 'End date (YYYY-MM-DD)',
          },
          previousStart: {
            type: 'string',
            description: 'Previous period start (for comparison)',
          },
          previousEnd: {
            type: 'string',
            description: 'Previous period end (for comparison)',
          },
          mailboxes: {
            type: 'array',
            items: { type: 'number' },
            description: 'Filter by mailbox IDs',
          },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Filter by tags',
          },
        },
        required: ['userId', 'start', 'end'],
      },
      handler: async (args: any) => {
        const report = await client.get<UserReport>(
          `/reports/user/${args.userId}`,
          {
            start: args.start,
            end: args.end,
            previousStart: args.previousStart,
            previousEnd: args.previousEnd,
            mailboxes: args.mailboxes,
            tags: args.tags,
          }
        );
        return report;
      },
    },
  ];
}
