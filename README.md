# HelpScout MCP Server

A comprehensive Model Context Protocol (MCP) server for HelpScout's Mailbox API v2. This server provides 47+ tools and 18 interactive MCP apps for complete customer support management.

## Features

### 🛠️ Tools (47)

#### Conversations (12 tools)
- List, get, create, update, delete conversations
- Manage threads (list, create reply, create note, create phone)
- Update tags, change status, assign conversations

#### Customers (12 tools)
- List, get, create, update, delete customers
- Manage customer emails, phones, addresses
- List customer properties

#### Mailboxes (5 tools)
- List and get mailboxes
- List folders and custom fields

#### Users (3 tools)
- List and get users
- Get current authenticated user

#### Tags (4 tools)
- List, create, update, delete tags

#### Workflows (5 tools)
- List, get workflows
- Activate/deactivate workflows
- Get workflow statistics

#### Saved Replies (5 tools)
- List, get, create, update, delete saved replies

#### Teams (3 tools)
- List, get teams
- List team members

#### Webhooks (5 tools)
- List, get, create, update, delete webhooks

#### Reporting (5 tools)
- Company overview report
- Conversations report
- Happiness report
- Productivity report
- User-specific reports

### 📱 MCP Apps (18)

1. **conversation-dashboard** - Dashboard view of conversations with filters
2. **conversation-detail** - Detailed single conversation view
3. **conversation-grid** - Card-based grid layout
4. **conversation-timeline** - Visual timeline of conversation history
5. **customer-grid** - Grid view of all customers
6. **customer-detail** - Detailed customer profile
7. **mailbox-overview** - Overview of all mailboxes
8. **folder-browser** - Browse and manage folders
9. **user-stats** - Individual user performance metrics
10. **tag-manager** - Manage tags with usage stats
11. **workflow-dashboard** - Workflow management dashboard
12. **workflow-detail** - Detailed workflow configuration
13. **saved-replies** - Browse and manage saved replies
14. **team-overview** - Team structure and member stats
15. **happiness-report** - Customer satisfaction metrics
16. **productivity-report** - Team productivity metrics
17. **company-report** - Overall company performance KPIs
18. **search-results** - Search interface for conversations

## Installation

```bash
npm install
npm run build
```

## Configuration

Create a `.env` file with your HelpScout credentials:

```env
HELPSCOUT_APP_ID=your_app_id
HELPSCOUT_APP_SECRET=your_app_secret
```

### Getting HelpScout Credentials

1. Go to https://secure.helpscout.net/apps/
2. Create a new app
3. Copy the App ID and App Secret
4. Add them to your `.env` file

## Usage

### With MCP Client

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "helpscout": {
      "command": "node",
      "args": ["/path/to/helpscout/dist/main.js"],
      "env": {
        "HELPSCOUT_APP_ID": "your_app_id",
        "HELPSCOUT_APP_SECRET": "your_app_secret"
      }
    }
  }
}
```

### Standalone

```bash
npm start
```

## API Coverage

This server implements the HelpScout Mailbox API v2:
- **Base URL**: https://api.helpscout.net/v2/
- **Authentication**: OAuth2 Client Credentials
- **Features**: Pagination, error handling, automatic token refresh

## Tool Examples

### List Active Conversations
```javascript
{
  "name": "helpscout_list_conversations",
  "arguments": {
    "status": "active",
    "mailbox": 123456
  }
}
```

### Create a Conversation
```javascript
{
  "name": "helpscout_create_conversation",
  "arguments": {
    "subject": "Need help with billing",
    "type": "email",
    "mailboxId": 123456,
    "customerEmail": "customer@example.com",
    "status": "active"
  }
}
```

### Get Happiness Report
```javascript
{
  "name": "helpscout_get_happiness_report",
  "arguments": {
    "start": "2025-01-01",
    "end": "2025-01-31"
  }
}
```

## MCP Apps Usage

Access MCP apps as resources:

```
helpscout://app/conversation-dashboard
helpscout://app/customer-detail
helpscout://app/happiness-report
```

Each app provides a rich HTML interface for interacting with HelpScout data.

## Development

```bash
# Build
npm run build

# Watch mode
npm run dev

# Prepare for publishing
npm run prepare
```

## Architecture

```
src/
├── api/
│   └── client.ts          # HelpScout API client with OAuth2
├── tools/
│   ├── conversations-tools.ts
│   ├── customers-tools.ts
│   ├── mailboxes-tools.ts
│   ├── users-tools.ts
│   ├── tags-tools.ts
│   ├── workflows-tools.ts
│   ├── saved-replies-tools.ts
│   ├── teams-tools.ts
│   ├── webhooks-tools.ts
│   └── reporting-tools.ts
├── apps/
│   ├── conversation-dashboard.ts
│   ├── conversation-detail.ts
│   └── ... (18 apps total)
├── types/
│   └── index.ts           # TypeScript type definitions
├── server.ts              # MCP server implementation
└── main.ts                # Entry point
```

## Error Handling

The server includes comprehensive error handling:
- API errors are caught and returned with detailed messages
- Token refresh is automatic
- Pagination handles large datasets gracefully

## Contributing

This is part of the MCPEngine project. For contributions, please refer to the main repository guidelines.

## License

MIT

## Links

- [HelpScout API Documentation](https://developer.helpscout.com/)
- [MCP Documentation](https://modelcontextprotocol.io/)
- [MCPEngine](https://github.com/BusyBee3333/mcpengine)
