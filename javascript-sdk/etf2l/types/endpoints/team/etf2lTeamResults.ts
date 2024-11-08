import type { MultiPage } from "../../common/multiPage.ts";
import type { TeamMatchData } from "../../team/mod.ts";

export type Etf2lTeamResults = MultiPage & {
  data: Omit<TeamMatchData, "id">[];
};