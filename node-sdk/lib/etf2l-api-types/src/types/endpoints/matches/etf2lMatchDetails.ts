import type { MatchData } from "types/matches/matchData";
import type { Status } from "types/common/status";

export type Etf2lMatchDetails = {
  match: MatchData;
  status: Status;
};