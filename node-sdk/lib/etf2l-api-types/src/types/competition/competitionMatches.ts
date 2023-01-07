import type { CompetitionMatchData } from "./competitionMatchData";
import type { MultiPage } from "../common/multiPage";
import type { Status } from "../common/status";

export type CompetitionMatches = MultiPage & {
  data: CompetitionMatchData;
  status: Status;
};