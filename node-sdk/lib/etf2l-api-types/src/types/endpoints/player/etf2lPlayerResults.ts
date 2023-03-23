import type { MultiPage } from "types/common/multiPage";
import type { PlayerResultData } from "types/player/playerResultData";

export type Etf2lPlayerResults = MultiPage & {
  data: PlayerResultData;
};