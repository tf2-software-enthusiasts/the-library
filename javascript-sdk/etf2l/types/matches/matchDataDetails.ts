import type { Clan } from "../common/clan.ts";
import type { CompetitionResultsCompetition } from "../competition/competitionResultsCompetition.ts";
import type { CompetitionResultsDivision } from "../competition/competitionResultsDivision.ts";
import type { MatchPlayer } from "./matchPlayer.ts";

export type MatchDataDetails = {
  clan1: Clan;
  clan2: Clan;
  //TODO:
  competition: CompetitionResultsCompetition;
  defaultwin: boolean | null;
  division: CompetitionResultsDivision | null;
  id: number;
  maps: string[];
  r1: number;
  r2: number;
  round: string;
  time: number | null;
  submitted: number;
  week: number;
  urls: {
    self: string;
    api: string;
  };
  //TODO:
  players: MatchPlayer[];
  bye_week: boolean;
  demos: [];
  map_results: {
    match_order: number;
    clan1: number;
    clan2: number;
    map: string;
    golden_cap: boolean;
  }[];
};
