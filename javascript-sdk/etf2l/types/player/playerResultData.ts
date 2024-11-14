import type { CompetitionResultsCompetition } from "../competition/competitionResultsCompetition.ts";
import type { CompetitionResultsDivision } from "../competition/competitionResultsDivision.ts";
import type { PlayerResultClan } from "./playerResultClan.ts";

export type PlayerResultData = {
  clan1: PlayerResultClan;
  clan2: PlayerResultClan;
  competition: CompetitionResultsCompetition;
  defaultwin: boolean | null;
  division: CompetitionResultsDivision | null;
  result: number;
  maps: string[];
  merced: boolean;
  r1: number;
  r2: number;
  round: string;
  time: number | null;
  week: number;
};
