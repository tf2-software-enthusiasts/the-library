import type { Clan } from "types/common/clan";
import type { CompetitionResultsCompetition } from "types/competition/competitionResultsCompetition";
import type { CompetitionResultsDivision } from "types/competition/competitionResultsDivision";

export type MatchData = {
  clan1: Clan;
  clan2: Clan;
  competition: CompetitionResultsCompetition;
  defaultwin: boolean | null;
  division: CompetitionResultsDivision | null;
  id: number;
  maps: string[];
  r1: number | null;
  r2: number | null;
  round: string;
  submitted: number | null;
  time: number | null;
  urls: {
    self: string;
    api: string;
  };
  week: number;
};
