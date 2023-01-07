import type { CompetitionResultsCompetition } from "types/competition/competitionResultsCompetition";
import type { CompetitionResultsDivision } from "types/competition/competitionResultsDivision";
import type { PlayerResultClan } from "./playerResultClan";

export type PlayerResultData = {
  clan1: PlayerResultClan;
  clan2: PlayerResultClan;
  competition: CompetitionResultsCompetition;
  defaultwin: boolean;
  division: CompetitionResultsDivision | null;
  result: number;
  maps: string[];
  merced: boolean;
  r1: number;
  r2: number;
  round: string;
  time: number;
  week: number;
};