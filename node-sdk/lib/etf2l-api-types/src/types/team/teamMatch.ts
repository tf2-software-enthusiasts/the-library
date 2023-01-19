import type { MultiPage } from "types/common/multiPage";
import type { TeamMatchData } from "./teamMatchData";

export type TeamMatch = MultiPage & {
  data: TeamMatchData
}