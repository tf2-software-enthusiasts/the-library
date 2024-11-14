import type { PlayerTransferTeam } from "../player/mod.ts";
import type { TeamTransferPlayer } from "./teamTransferPlayer.ts";

export type TeamTransferData = {
  by: TeamTransferPlayer;
  who: TeamTransferPlayer;
  team: PlayerTransferTeam;
  time: number | null;
  type: "left" | "joined";
};
