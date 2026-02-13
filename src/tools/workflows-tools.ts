import type { HelpScoutClient } from '../api/client.js';
import type { Workflow, WorkflowStats } from '../types/index.js';

export function registerWorkflowTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_workflows',
      description: 'List all workflows with optional filters',
      inputSchema: {
        type: 'object',
        properties: {
          mailboxId: { type: 'number', description: 'Filter by mailbox ID' },
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
      },
      handler: async (args: any) => {
        const workflows = await client.getAllPages<Workflow>(
          '/workflows',
          args,
          'workflows'
        );
        return { workflows, count: workflows.length };
      },
    },
    {
      name: 'helpscout_get_workflow',
      description: 'Get a workflow by ID with full details',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Workflow ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const workflow = await client.get<Workflow>(`/workflows/${args.id}`);
        return workflow;
      },
    },
    {
      name: 'helpscout_activate_workflow',
      description: 'Activate a workflow',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Workflow ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        await client.patch(`/workflows/${args.id}`, {
          op: 'replace',
          path: '/status',
          value: 'active',
        });
        return { success: true, message: 'Workflow activated' };
      },
    },
    {
      name: 'helpscout_deactivate_workflow',
      description: 'Deactivate a workflow',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Workflow ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        await client.patch(`/workflows/${args.id}`, {
          op: 'replace',
          path: '/status',
          value: 'inactive',
        });
        return { success: true, message: 'Workflow deactivated' };
      },
    },
    {
      name: 'helpscout_get_workflow_stats',
      description: 'Get statistics for a workflow (run counts)',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Workflow ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const stats = await client.get<WorkflowStats>(
          `/workflows/${args.id}/stats`
        );
        return stats;
      },
    },
  ];
}
