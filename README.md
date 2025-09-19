# Agent-Based App Monorepo

This repository is organized by **agents** (CEO, PM, CTO, COO, Docs Lead, QA Lead, CISO, Lead Full Stack Developer, Staff Agents).
Everything runs in Docker. Use the demo runner to spin up a local environment.

## Apps
- Marketing Website
- Product App (auth: login & signup)

## Setup model
Big Picture → Data Models → APIs → UI

## Quickstart
```bash
# 1) Init repo
git init && git add . && git commit -m "chore: bootstrap"

# 2) Install git hooks (optional guard)
./scripts/install-hooks.sh

# 3) Run demo (docker compose)
docker compose -f infra/docker-compose.yml up --build

# 4) Run local checks
./scripts/checks.sh
```


## Nx commands
```bash
npm install
npx nx graph          # visualize projects
npm run dev:web       # run Remix app via Nx
```

## Linear MCP (Product Management)
```bash
npm install
npm run -w tools/linear-mcp-server build
# Configure your MCP client to run tools/linear-mcp-server/dist/index.js with LINEAR_API_KEY
```
