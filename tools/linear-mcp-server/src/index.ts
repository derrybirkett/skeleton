import 'dotenv/config';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { GraphQLClient, gql } from 'graphql-request';

// Minimal Linear GraphQL client
const endpoint = 'https://api.linear.app/graphql';
const linear = new GraphQLClient(endpoint, {
  headers: { Authorization: process.env.LINEAR_API_KEY ? process.env.LINEAR_API_KEY : '' }
});

const CreateIssueSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional().default(''),
  teamKey: z.string().optional()
});

async function createIssue(args: z.infer<typeof CreateIssueSchema>) {
  const mutation = gql`
    mutation CreateIssue($input: IssueCreateInput!) {
      issueCreate(input: $input) {
        success
        issue {
          id
          identifier
          url
          title
        }
      }
    }
  `;
  const variables: any = {
    input: {
      title: args.title,
      description: args.description || '',
      teamId: undefined
    }
  };
  // Resolve team by key if provided
  const teamKey = args.teamKey || process.env.LINEAR_TEAM_KEY;
  if (teamKey) {
    const teamQuery = gql`query TeamByKey($key: String!) { team(key: $key) { id name key } }`;
    const data = await linear.request(teamQuery, { key: teamKey });
    if (data?.team?.id) variables.input.teamId = data.team.id;
  }
  const result = await linear.request(mutation, variables);
  return result.issueCreate.issue;
}

const server = new Server(
  {
    name: 'linear-mcp-server',
    version: '0.1.0',
    description: 'MCP server exposing simple Linear actions for Product Management.'
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

// Tool: create_issue
server.tool('create_issue', {
  description: 'Create a Linear issue with optional description and team key.',
  inputSchema: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      teamKey: { type: 'string' }
    },
    required: ['title']
  }
}, async (input) => {
  const parsed = CreateIssueSchema.parse(input);
  const issue = await createIssue(parsed);
  return {
    content: [
      {
        type: 'text',
        text: `Created ${issue.identifier}: ${issue.title} -> ${issue.url}`
      }
    ]
  };
});

// Health tool
server.tool('whoami', {
  description: 'Returns the workspace defaults used by the Linear MCP server',
  inputSchema: { type: 'object', properties: {} }
}, async () => {
  return {
    content: [
      {
        type: 'text',
        text: `teamKey=${process.env.LINEAR_TEAM_KEY || 'unset'}`
      }
    ]
  };
});

const transport = new StdioServerTransport();
server.connect(transport);
