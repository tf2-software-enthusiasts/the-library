import type { CompetitionMatchData } from "./competitionMatchData.ts";
import type { MultiPage } from "../common/multiPage.ts";
import type { Status } from "../common/status.ts";

export type CompetitionMatches = MultiPage & {
  data: CompetitionMatchData;
  status: Status;
};
