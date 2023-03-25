import type { Clan } from "types/common/clan";
import type { CompetitionResultsCompetition } from "types/competition/competitionResultsCompetition";
import type { CompetitionResultsDivision } from "types/competition/competitionResultsDivision";

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