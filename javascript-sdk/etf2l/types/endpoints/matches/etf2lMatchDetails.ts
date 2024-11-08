import type { MatchDataDetails } from "../../matches/matchDataDetails.ts";
import type { Status } from "../../common/status.ts";

export type Etf2lMatchDetails = {
  match: MatchDataDetails;
  status: Status;
};