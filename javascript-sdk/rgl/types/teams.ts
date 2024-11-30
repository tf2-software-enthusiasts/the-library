import type { PagedRequest } from "./pagedRequest.ts";
import type { SearchResponse } from "./searchResponse.ts";

export type TeamByIdResponse = {
  teamId: number;
  linkedTeams: number[];
  seasonId: number;
  divisionId: number;
  divisionName: string;
  teamLeader: string;
  createdAt: Date;
  updatedAt: Date;
  tag: string;
  name: string;
  finalRank: number;
  teamStatus: string;
  teamReady: boolean;
  players: RosteredPlayer;
};

export type TeamSearchResponse = SearchResponse<string>;
export type TeamSearchParameters = PagedRequest & {
  nameContains?: string | null;
};

export type RosteredPlayer = {
  name: string;
  steamId: string;
  isLeader: boolean;
  joinedAt: Date;
  leftAt: Date;
};
