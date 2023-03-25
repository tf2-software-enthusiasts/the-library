import type { MatchDataDetails } from "types/matches/matchDataDetails";
import type { Status } from "types/common/status";

export type Etf2lMatchDetails = {
  match: MatchDataDetails;
  status: Status;
};