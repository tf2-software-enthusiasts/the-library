import type { Clan } from "../common/clan.ts";
import type { CompetitionResultsCompetition } from "../competition/competitionResultsCompetition.ts";
import type { CompetitionResultsDivision } from "../competition/competitionResultsDivision.ts";

export type TeamMatchData = {
  id: number;
  clan1: Clan;
  clan2: Clan;
  competition: CompetitionResultsCompetition;
  defaultwin: boolean | null;
  division: CompetitionResultsDivision;
  result: number;
  maps: string[];
  r1: number;
  r2: number;
  round: string;
  time: number | null;
  week: number;
};