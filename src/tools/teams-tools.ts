import type { HelpScoutClient } from '../api/client.js';
import type { Team, User } from '../types/index.js';

export function registerTeamTools(client: HelpScoutClient) {
  return [
    {
      name: 'helpscout_list_teams',
      description: 'List all teams',
      inputSchema: {
        type: 'object',
        properties: {
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
      },
      handler: async (args: any) => {
        const teams = await client.getAllPages<Team>(
          '/teams',
          args,
          'teams'
        );
        return { teams, count: teams.length };
      },
    },
    {
      name: 'helpscout_get_team',
      description: 'Get a team by ID with full details',
      inputSchema: {
        type: 'object',
        properties: {
          id: { type: 'number', description: 'Team ID' },
        },
        required: ['id'],
      },
      handler: async (args: { id: number }) => {
        const team = await client.get<Team>(`/teams/${args.id}`);
        return team;
      },
    },
    {
      name: 'helpscout_list_team_members',
      description: 'List all members of a team',
      inputSchema: {
        type: 'object',
        properties: {
          teamId: { type: 'number', description: 'Team ID' },
          page: { type: 'number', description: 'Page number (default: 1)' },
        },
        required: ['teamId'],
      },
      handler: async (args: any) => {
        const members = await client.getAllPages<User>(
          `/teams/${args.teamId}/members`,
          { page: args.page },
          'members'
        );
        return { members, count: members.length };
      },
    },
  ];
}
