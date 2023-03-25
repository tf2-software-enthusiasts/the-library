import type { Clan } from "types/common/clan";

export type PlayerResultClan = Clan & {
  was_in_team: boolean;
}