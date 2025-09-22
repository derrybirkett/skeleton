# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an **agent-based application monorepo** organized around specific roles (CEO, PM, CTO, COO, Docs Lead, QA Lead, CISO, Lead Full Stack Developer, Staff Agents). Each agent has defined responsibilities and documentation in the `agents/` directory. The project follows a "Big Picture → Data Models → APIs → UI" development methodology.

## Architecture

- **Monorepo**: Uses Nx workspace with apps in `apps/` and tools in `tools/`
- **Agent-Driven**: Each business role is represented as an agent with specific responsibilities
- **Docker-First**: Everything runs in Docker containers for consistent environments
- **MCP Integration**: Model Context Protocol integration for Linear project management
- **Marketing Integration**: CMO role with automated blog posting for feature releases

## Common Development Commands

### Initial Setup
```bash
# Initialize repository
git init && git add . && git commit -m "chore: bootstrap"

# Install git hooks (enforces changelog updates)
./scripts/install-hooks.sh

# Install dependencies
npm install
```

### Development
```bash
# Start full development environment (Docker)
docker compose -f infra/docker-compose.yml up --build

# Start with blog service
docker compose -f infra/docker-compose.yml --profile blog up --build

# Run web app locally (without Docker)
npm run dev:web

# Run blog locally
npm run dev:blog

# Run web app via Nx
npx nx serve web

# Build web app
npm run build:web
# or
npx nx build web

# Build blog
npm run build:blog
# or
npx nx build blog
```

### Testing
```bash
# Run repository checks
./scripts/checks.sh

# Visualize project dependencies
npx nx graph
```

### Linear MCP Server (Project Management)
```bash
npm install
npm run -w tools/linear-mcp-server build
# Configure MCP client to run tools/linear-mcp-server/dist/index.js with LINEAR_API_KEY
```

## Tech Stack

- **Nx**: Monorepo management and build system
- **Remix**: Full-stack web framework (apps/web)
- **Astro**: Static site generator for blog (apps/blog)
- **ShadCN**: UI components
- **Supabase**: Backend-as-a-Service
- **Playwright**: Testing framework (user preference)
- **Context7**: Documentation/knowledge management
- **Stripe**: Payment processing
- **Docker**: Containerization and local development
- **PostgreSQL**: Database (via Docker)

## Development Workflow

### Branching Strategy
- Use short, kebab-case branches: `agent/feature-short-desc`
- Open PRs early as drafts until ready for review

### Required Process
1. **Activity Log**: All changes must be logged in `docs/activity_log.md`
2. **Changelog**: User-facing changes must be added to `docs/changelog.md`
3. **Blog Posts**: New features require corresponding blog posts in `apps/blog/src/content/posts/`
4. **Git Hooks**: Pre-commit hook enforces changelog and blog post updates for new features
5. **Agent Approval**: Changes affecting agent responsibilities require appropriate agent review

### PR Requirements
- Summary of changes
- Affected Agent(s) identification
- Link to Activity Log entry
- Tests/verification steps
- Security review (no secrets in code)

## Key Files and Directories

- `docs/agent_manifest.yml`: Defines all agents and their responsibilities
- `docs/activity_log.md`: Required log of all repository changes (COO gatekeeps)
- `agents/*/`: Agent-specific documentation and guidelines
- `infra/docker-compose.yml`: Development environment setup
- `hooks/pre-commit`: Enforces changelog discipline
- `tools/check_changelog.py`: Validates changelog compliance

## Agent Roles

Each agent has specific responsibilities documented in `agents/[role]/`. Key agents:
- **CEO**: Vision and governance
- **PM**: PRDs, playbooks, acceptance criteria
- **CTO**: Architecture, MCP integration (Big Picture → Data Models → APIs → UI)
- **Lead Full Stack**: Repository setup, Docker, CI/CD
- **COO**: Activity log gatekeeping, merge control
- **CMO**: Marketing strategy, blog posts for feature releases
- **QA Lead**: Testing strategy with Playwright
- **CISO**: Security policies, secrets management
- **Docs Lead**: Documentation standards

## Environment Variables

Development environment supports:
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_ANON_KEY`: Supabase anonymous key
- `LINEAR_API_KEY`: For Linear MCP server integration

## Services

- **Web App**: Runs on port 3000 (localhost:3000)
- **Blog**: Runs on port 4321 (localhost:4321, requires --profile blog)
- **PostgreSQL**: Runs on port 5432 (via Docker)
- **API**: Containerized in infra/api/
