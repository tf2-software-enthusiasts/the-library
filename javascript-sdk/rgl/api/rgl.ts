import type { BanPagedResponse, PagedBanOptions } from "../types/bans.ts";
import type {
  TeamByIdResponse,
  TeamSearchParameters,
  TeamSearchResponse,
} from "../types/teams.ts";

const rglApiUrl = "https://api.rgl.gg/v0/";

export async function getBansPaged(options: PagedBanOptions) {
  const { skip = 0, take = 10 } = options;

  if (take > 100) {
    throw new Error("Skip must be less than 100");
  }

  const params = new URLSearchParams([
    ["skip", skip.toString()],
    ["take", take.toString()],
  ]);

  const response = await fetch(`${rglApiUrl}/bans/paged?${params.toString()}`);

  return (await response.json()) as BanPagedResponse;
}

export async function getSeasonById(seasonId: string) {
  if (!seasonId) {
    throw new Error("Skip must be less than 100");
  }

  const response = await fetch(`${rglApiUrl}/seasons/${seasonId}`);

  return (await response.json()) as BanPagedResponse;
}

export async function getTeamById(teamId: string) {
  if (!teamId) {
    throw new Error("Skip must be less than 100");
  }

  const response = await fetch(`${rglApiUrl}/teams/${teamId}`);

  return (await response.json()) as TeamByIdResponse;
}

export async function searchTeams(parameters: TeamSearchParameters) {
  const { skip = 0, take = 10 } = parameters;

  const params = new URLSearchParams([
    ["skip", skip.toString()],
    ["take", take.toString()],
  ]);

  const response = await fetch(`${rglApiUrl}/search/teams${params}`, {
    body: JSON.stringify(parameters),
  });

  return (await response.json()) as TeamSearchResponse;
}
