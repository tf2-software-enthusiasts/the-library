import type { CompetitionTeamStats } from "./competitionTeamStats.ts";
import type { CompetitionUrls } from "./competitionUrls.ts";

export type CompetitionDetails = {
  category: string;
  description: string;
  id: number;
  name: string;
  pool: string[];
  archived: boolean;
  type: string;
  teams: CompetitionTeamStats;
  urls: CompetitionUrls;
};
