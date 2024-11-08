import type { Player } from "./player.ts";
import type { PlayerTransferTeam} from "./playerTransferTeam.ts";

export type PlayerTransferData = {
  by: Player;
  team: PlayerTransferTeam;
  time: number | null;
  type: 'left' | 'joined';
}