import type { MultiPage } from "types/common/multiPage";
import type { TeamMatchData } from "types/team";

export type Etf2lTeamResults = MultiPage & {
  data: Omit<TeamMatchData, "id">[];
};