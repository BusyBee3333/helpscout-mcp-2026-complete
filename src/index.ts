#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// ============================================
// CONFIGURATION
// ============================================
const MCP_NAME = "helpscout";
const MCP_VERSION = "1.0.0";
const API_BASE_URL = "https://api.helpscout.net/v2";

// ============================================
// API CLIENT (OAuth 2.0)
// ============================================
class HelpScoutClient {
  private accessToken: string;
  private baseUrl: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
    this.baseUrl = API_BASE_URL;
  }

  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        "Authorization": `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Help Scout API error: ${response.status} - ${error}`);
    }

    // Some endpoints return 201/204 with no body
    const text = await response.text();
    return text ? JSON.parse(text) : { success: true };
  }

  async get(endpoint: string, params: Record<string, any> = {}) {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    }
    return this.request(url.pathname + url.search, { method: "GET" });
  }

  async post(endpoint: string, data: any) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

// ============================================
// TOOL DEFINITIONS
// ============================================
const tools = [
  {
    name: "list_conversations",
    description: "List conversations (tickets) from Help Scout. Returns paginated list with embedded conversation data.",
    inputSchema: {
      type: "object" as const,
      properties: {
        mailbox: { type: "number", description: "Filter by mailbox ID" },
        status: { 
          type: "string", 
          description: "Filter by status",
          enum: ["active", "open", "closed", "pending", "spam"]
        },
        tag: { type: "string", description: "Filter by tag" },
        assigned_to: { type: "number", description: "Filter by assigned user ID" },
        folder: { type: "number", description: "Filter by folder ID" },
        page: { type: "number", description: "Page number (default 1)" },
        sortField: { type: "string", description: "Sort field (createdAt, modifiedAt, number)" },
        sortOrder: { type: "string", enum: ["asc", "desc"], description: "Sort order" },
      },
    },
  },
  {
    name: "get_conversation",
    description: "Get a specific conversation by ID with full thread details",
    inputSchema: {
      type: "object" as const,
      properties: {
        id: { type: "number", description: "Conversation ID" },
      },
      required: ["id"],
    },
  },
  {
    name: "create_conversation",
    description: "Create a new conversation (ticket) in Help Scout",
    inputSchema: {
      type: "object" as const,
      properties: {
        mailboxId: { type: "number", description: "Mailbox ID (required)" },
        subject: { type: "string", description: "Conversation subject (required)" },
        customer: {
          type: "object",
          description: "Customer object with email (required): {email: 'customer@example.com'}",
        },
        type: { 
          type: "string", 
          enum: ["email", "phone", "chat"],
          description: "Conversation type (default: email)" 
        },
        status: { 
          type: "string", 
          enum: ["active", "closed", "pending"],
          description: "Initial status (default: active)" 
        },
        threads: {
          type: "array",
          description: "Initial threads [{type: 'customer', text: 'message content'}]",
          items: { type: "object" }
        },
        tags: { 
          type: "array", 
          items: { type: "string" },
          description: "Tags to apply" 
        },
        assignTo: { type: "number", description: "User ID to assign to" },
      },
      required: ["mailboxId", "subject", "customer"],
    },
  },
  {
    name: "reply_conversation",
    description: "Reply to an existing conversation",
    inputSchema: {
      type: "object" as const,
      properties: {
        conversationId: { type: "number", description: "Conversation ID to reply to (required)" },
        text: { type: "string", description: "Reply text/HTML content (required)" },
        user: { type: "number", description: "User ID sending reply (required for agent replies)" },
        customer: { 
          type: "object", 
          description: "Customer object for customer replies: {email: 'customer@example.com'}" 
        },
        type: { 
          type: "string", 
          enum: ["reply", "note"],
          description: "Thread type (reply=visible to customer, note=internal)" 
        },
        status: { 
          type: "string", 
          enum: ["active", "closed", "pending"],
          description: "Set conversation status after reply" 
        },
        draft: { type: "boolean", description: "Save as draft" },
        cc: { type: "array", items: { type: "string" }, description: "CC email addresses" },
        bcc: { type: "array", items: { type: "string" }, description: "BCC email addresses" },
      },
      required: ["conversationId", "text"],
    },
  },
  {
    name: "list_customers",
    description: "List customers from Help Scout",
    inputSchema: {
      type: "object" as const,
      properties: {
        email: { type: "string", description: "Filter by email address" },
        firstName: { type: "string", description: "Filter by first name" },
        lastName: { type: "string", description: "Filter by last name" },
        query: { type: "string", description: "Search query" },
        page: { type: "number", description: "Page number" },
        sortField: { type: "string", description: "Sort field (firstName, lastName, modifiedAt)" },
        sortOrder: { type: "string", enum: ["asc", "desc"], description: "Sort order" },
      },
    },
  },
  {
    name: "list_mailboxes",
    description: "List all mailboxes accessible to the authenticated user",
    inputSchema: {
      type: "object" as const,
      properties: {
        page: { type: "number", description: "Page number (default 1)" },
      },
    },
  },
  {
    name: "search",
    description: "Search conversations using Help Scout's search syntax",
    inputSchema: {
      type: "object" as const,
      properties: {
        query: { 
          type: "string", 
          description: "Search query (required). Supports: subject:, customer:, status:, tag:, mailbox:, etc." 
        },
        page: { type: "number", description: "Page number" },
        sortField: { type: "string", description: "Sort field" },
        sortOrder: { type: "string", enum: ["asc", "desc"], description: "Sort order" },
      },
      required: ["query"],
    },
  },
];

// ============================================
// TOOL HANDLERS
// ============================================
async function handleTool(client: HelpScoutClient, name: string, args: any) {
  switch (name) {
    case "list_conversations": {
      const params: Record<string, any> = {};
      if (args.mailbox) params.mailbox = args.mailbox;
      if (args.status) params.status = args.status;
      if (args.tag) params.tag = args.tag;
      if (args.assigned_to) params["assigned_to"] = args.assigned_to;
      if (args.folder) params.folder = args.folder;
      if (args.page) params.page = args.page;
      if (args.sortField) params.sortField = args.sortField;
      if (args.sortOrder) params.sortOrder = args.sortOrder;
      return await client.get("/conversations", params);
    }
    case "get_conversation": {
      const { id } = args;
      return await client.get(`/conversations/${id}`);
    }
    case "create_conversation": {
      const payload: any = {
        mailboxId: args.mailboxId,
        subject: args.subject,
        customer: args.customer,
        type: args.type || "email",
        status: args.status || "active",
      };
      if (args.threads) payload.threads = args.threads;
      if (args.tags) payload.tags = args.tags;
      if (args.assignTo) payload.assignTo = args.assignTo;
      return await client.post("/conversations", payload);
    }
    case "reply_conversation": {
      const { conversationId, ...threadData } = args;
      const payload: any = {
        text: threadData.text,
        type: threadData.type || "reply",
      };
      if (threadData.user) payload.user = threadData.user;
      if (threadData.customer) payload.customer = threadData.customer;
      if (threadData.status) payload.status = threadData.status;
      if (threadData.draft) payload.draft = threadData.draft;
      if (threadData.cc) payload.cc = threadData.cc;
      if (threadData.bcc) payload.bcc = threadData.bcc;
      return await client.post(`/conversations/${conversationId}/reply`, payload);
    }
    case "list_customers": {
      const params: Record<string, any> = {};
      if (args.email) params.email = args.email;
      if (args.firstName) params.firstName = args.firstName;
      if (args.lastName) params.lastName = args.lastName;
      if (args.query) params.query = args.query;
      if (args.page) params.page = args.page;
      if (args.sortField) params.sortField = args.sortField;
      if (args.sortOrder) params.sortOrder = args.sortOrder;
      return await client.get("/customers", params);
    }
    case "list_mailboxes": {
      return await client.get("/mailboxes", { page: args.page });
    }
    case "search": {
      const params: Record<string, any> = { query: args.query };
      if (args.page) params.page = args.page;
      if (args.sortField) params.sortField = args.sortField;
      if (args.sortOrder) params.sortOrder = args.sortOrder;
      return await client.get("/conversations/search", params);
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// ============================================
// SERVER SETUP
// ============================================
async function main() {
  const accessToken = process.env.HELPSCOUT_ACCESS_TOKEN;
  if (!accessToken) {
    console.error("Error: HELPSCOUT_ACCESS_TOKEN environment variable required");
    console.error("Obtain via OAuth 2.0 flow at https://developer.helpscout.com/mailbox-api/overview/authentication/");
    process.exit(1);
  }

  const client = new HelpScoutClient(accessToken);

  const server = new Server(
    { name: `${MCP_NAME}-mcp`, version: MCP_VERSION },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools,
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    
    try {
      const result = await handleTool(client, name, args || {});
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        content: [{ type: "text", text: `Error: ${message}` }],
        isError: true,
      };
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`${MCP_NAME} MCP server running on stdio`);
}

main().catch(console.error);
