import type { PlayerInformationData } from "types/player/playerInformationData";
import type { Status } from "types/common/status";

export type Etf2lPlayerInformation = {
  player: PlayerInformationData;
  status: Status;
};