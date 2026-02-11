# HelpScout MCP Server

A Model Context Protocol (MCP) server for HelpScout — the customer support platform.

## Features

- **Mailbox Management** — List, create, and manage mailboxes
- **Conversation Tools** — Search, read, reply to conversations
- **Customer Management** — CRUD operations on customers
- **Workflow Automation** — Manage workflows and automations
- **Reporting** — Access HelpScout reports and analytics

## Quick Start

```bash
git clone https://github.com/BusyBee3333/helpscout-mcp-2026-complete.git
cd helpscout-mcp-2026-complete
npm install
cp .env.example .env
# Add your HelpScout API credentials to .env
npm run build
npm start
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `HELPSCOUT_APP_ID` | Your HelpScout OAuth2 App ID |
| `HELPSCOUT_APP_SECRET` | Your HelpScout OAuth2 App Secret |

## Claude Desktop Config

```json
{
  "mcpServers": {
    "helpscout": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "HELPSCOUT_APP_ID": "your_app_id",
        "HELPSCOUT_APP_SECRET": "your_app_secret"
      }
    }
  }
}
```

## License

MIT
