import type { Player } from "./player";
import type { PlayerTransferTeam} from "./playerTransferTeam";

export type PlayerTransferData = {
  by: Player;
  team: PlayerTransferTeam;
  time: number | null;
  type: 'left' | 'joined';
}