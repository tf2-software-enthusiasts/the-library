import type { MatchData } from "../../matches/matchData.ts";
import type { Status } from "../../common/status.ts";
import type { MultiPage } from "../../common/mod.ts";

export type Etf2lMatch = {
  results: MultiPage & {
    data: MatchData[];
  };
  status: Status;
};
