import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { HelpScoutClient } from './api/client.js';
import { registerConversationTools } from './tools/conversations-tools.js';
import { registerCustomerTools } from './tools/customers-tools.js';
import { registerMailboxTools } from './tools/mailboxes-tools.js';
import { registerUserTools } from './tools/users-tools.js';
import { registerTagTools } from './tools/tags-tools.js';
import { registerWorkflowTools } from './tools/workflows-tools.js';
import { registerSavedReplyTools } from './tools/saved-replies-tools.js';
import { registerTeamTools } from './tools/teams-tools.js';
import { registerWebhookTools } from './tools/webhooks-tools.js';
import { registerReportingTools } from './tools/reporting-tools.js';

// Import MCP apps
import { conversationDashboardApp } from './apps/conversation-dashboard.js';
import { conversationDetailApp } from './apps/conversation-detail.js';
import { conversationGridApp } from './apps/conversation-grid.js';
import { conversationTimelineApp } from './apps/conversation-timeline.js';
import { customerGridApp } from './apps/customer-grid.js';
import { customerDetailApp } from './apps/customer-detail.js';
import { mailboxOverviewApp } from './apps/mailbox-overview.js';
import { folderBrowserApp } from './apps/folder-browser.js';
import { userStatsApp } from './apps/user-stats.js';
import { tagManagerApp } from './apps/tag-manager.js';
import { workflowDashboardApp } from './apps/workflow-dashboard.js';
import { workflowDetailApp } from './apps/workflow-detail.js';
import { savedRepliesApp } from './apps/saved-replies.js';
import { teamOverviewApp } from './apps/team-overview.js';
import { happinessReportApp } from './apps/happiness-report.js';
import { productivityReportApp } from './apps/productivity-report.js';
import { companyReportApp } from './apps/company-report.js';
import { searchResultsApp } from './apps/search-results.js';

export async function runServer() {
  const appId = process.env.HELPSCOUT_APP_ID;
  const appSecret = process.env.HELPSCOUT_APP_SECRET;

  if (!appId || !appSecret) {
    throw new Error(
      'HELPSCOUT_APP_ID and HELPSCOUT_APP_SECRET environment variables are required'
    );
  }

  const client = new HelpScoutClient({ appId, appSecret });

  const server = new Server(
    {
      name: 'helpscout-server',
      version: '1.0.0',
    },
    {
      capabilities: {
        resources: {},
        tools: {},
      },
    }
  );

  // Register all tools
  const allTools = [
    ...registerConversationTools(client),
    ...registerCustomerTools(client),
    ...registerMailboxTools(client),
    ...registerUserTools(client),
    ...registerTagTools(client),
    ...registerWorkflowTools(client),
    ...registerSavedReplyTools(client),
    ...registerTeamTools(client),
    ...registerWebhookTools(client),
    ...registerReportingTools(client),
  ];

  // Register all MCP apps as resources
  const allApps = [
    conversationDashboardApp,
    conversationDetailApp,
    conversationGridApp,
    conversationTimelineApp,
    customerGridApp,
    customerDetailApp,
    mailboxOverviewApp,
    folderBrowserApp,
    userStatsApp,
    tagManagerApp,
    workflowDashboardApp,
    workflowDetailApp,
    savedRepliesApp,
    teamOverviewApp,
    happinessReportApp,
    productivityReportApp,
    companyReportApp,
    searchResultsApp,
  ];

  // Handle list_resources
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return {
      resources: allApps.map((app) => ({
        uri: `helpscout://app/${app.name}`,
        name: app.name,
        description: app.description,
        mimeType: 'text/html',
      })),
    };
  });

  // Handle read_resource
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const uri = request.params.uri;
    const appName = uri.replace('helpscout://app/', '');
    const app = allApps.find((a) => a.name === appName);

    if (!app) {
      throw new Error(`App not found: ${appName}`);
    }

    return {
      contents: [
        {
          uri,
          mimeType: 'text/html',
          text: app.content,
        },
      ],
    };
  });

  // Handle list_tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: allTools.map((tool) => ({
        name: tool.name,
        description: tool.description,
        inputSchema: tool.inputSchema,
      })),
    };
  });

  // Handle call_tool
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const tool = allTools.find((t) => t.name === name);

    if (!tool) {
      throw new Error(`Tool not found: ${name}`);
    }

    try {
      const result = await tool.handler(args || {});
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ error: errorMessage }, null, 2),
          },
        ],
        isError: true,
      };
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error('HelpScout MCP Server running on stdio');
  console.error(`Registered ${allTools.length} tools`);
  console.error(`Registered ${allApps.length} apps`);
}
