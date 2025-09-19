# Linear MCP Server (Tools)

A minimal MCP server (Node) that exposes a small set of Linear actions for Product Management.

## Actions
- `create_issue({ title, description?, teamKey? })`
- `whoami()`

## Setup
```bash
cd tools/linear-mcp-server
cp .env.example .env   # add your LINEAR_API_KEY and optional LINEAR_TEAM_KEY
npm install
npm run dev            # runs MCP server over stdio
```

## Use with Warp MCP (example)
Add to your Warp MCP config (paths vary). Example `mcp.json`:
```json
{
  "runtimes": {
    "linear": {
      "command": "node",
      "args": ["./tools/linear-mcp-server/dist/index.js"],
      "env": {
        "LINEAR_API_KEY": "lin_xxx",
        "LINEAR_TEAM_KEY": "ENG"
      }
    }
  }
}
```
(You can also run with `tsx src/index.ts` during development.)
