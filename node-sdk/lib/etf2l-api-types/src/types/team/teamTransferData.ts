import type { MatchPlayer } from "types/matches/matchPlayer";
import type { PlayerTransferData } from "types/player/playerTransferData";

export type TeamTransferData = PlayerTransferData & {
  who: MatchPlayer;
}