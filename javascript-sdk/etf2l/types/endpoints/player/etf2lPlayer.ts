import type { PlayerData } from "../../player/playerData.ts";
import type { Status } from "../../common/status.ts";

export type Etf2lPlayer = {
  player: PlayerData;
  status: Status;
};
