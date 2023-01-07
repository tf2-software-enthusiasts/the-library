import type { Clan } from "../common/clan";
import type { CompetitionResultsCompetition } from "./competitionResultsCompetition";
import type { CompetitionResultsDivision } from "./competitionResultsDivision";

export type CompetitionResultsData = {
  clan: Clan;
  clan2: Clan;
  competition: CompetitionResultsCompetition;
  defaultwin: boolean;
  division: CompetitionResultsDivision;
  id: number;
  maps: string[];
  r1: number;
  r2: number;
  round: string;
  time: number | null;
  week: number;
};