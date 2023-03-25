import type { Clan } from "../common/clan";
import type { CompetitionResultsCompetition } from "./competitionResultsCompetition";
import type { CompetitionResultsDivision } from "./competitionResultsDivision";

export type CompetitionMatchData = {
  clan1: Clan;
  clan2: Clan;
  competition: CompetitionResultsCompetition;
  defaultwin: boolean | null;
  division: CompetitionResultsDivision;
  id: number;
  maps: string[];
  result: {
    r1: number;
    r2: number;
  };
  round: string;
  time: number | null;
  week: number;
  skill_contrib: number | null;
};