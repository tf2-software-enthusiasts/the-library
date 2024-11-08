import type { Clan } from "../common/clan.ts";
import type { CompetitionResultsCompetition } from "./competitionResultsCompetition.ts";
import type { CompetitionResultsDivision } from "./competitionResultsDivision.ts";

export type CompetitionResultsData = {
  clan1: Clan;
  clan2: Clan;
  competition: CompetitionResultsCompetition;
  defaultwin: boolean | null;
  division: CompetitionResultsDivision;
  id: number;
  maps: string[];
  r1: number;
  r2: number;
  round: string;
  time: number | null;
  week: number;
};