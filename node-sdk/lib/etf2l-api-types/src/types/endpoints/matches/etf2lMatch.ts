import type { MatchData } from "types/matches/matchData";
import type { Status } from "types/common/status";
import type { MultiPage } from "types/common";

export type Etf2lMatch = {
  results: MultiPage & {
    data: MatchData[];
  }
  status: Status;
};