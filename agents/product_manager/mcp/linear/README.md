# Linear MCP for Product Management

This integrates Product Ops with Linear via MCP.

## Quickstart
```bash
# Build the MCP server
npm install
npm run -w tools/linear-mcp-server build

# Or run in dev (hot TS):
npm run -w tools/linear-mcp-server dev
```

Then point your MCP-compatible client (e.g., Warp) at `agents/product_manager/mcp/linear/mcp.json` or copy the runtime block into your client config.
