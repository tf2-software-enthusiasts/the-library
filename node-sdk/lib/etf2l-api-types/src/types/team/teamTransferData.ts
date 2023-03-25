import type { PlayerTransferTeam } from "types/player";
import type { TeamTransferPlayer } from "./teamTransferPlayer";

export type TeamTransferData = {
  by: TeamTransferPlayer;
  who: TeamTransferPlayer;
  team: PlayerTransferTeam;
  time: number | null;
  type: 'left' | 'joined';
}