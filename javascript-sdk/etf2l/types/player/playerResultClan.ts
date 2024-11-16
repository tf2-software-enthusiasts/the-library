import type { Clan } from "../common/clan.ts";

export type PlayerResultClan = Clan & {
  was_in_team: boolean;
};
