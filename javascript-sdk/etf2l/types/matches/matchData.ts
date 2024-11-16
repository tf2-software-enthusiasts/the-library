import type { Clan } from "../../types/common/clan.ts";
import type { CompetitionResultsCompetition } from "../../types/competition/competitionResultsCompetition.ts";
import type { CompetitionResultsDivision } from "../../types/competition/competitionResultsDivision.ts";

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
