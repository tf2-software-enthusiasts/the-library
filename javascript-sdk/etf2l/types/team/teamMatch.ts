import type { MultiPage } from "../common/multiPage.ts";
import type { TeamMatchData } from "./teamMatchData.ts";

export type TeamMatch = MultiPage & {
  data: TeamMatchData[];
};
