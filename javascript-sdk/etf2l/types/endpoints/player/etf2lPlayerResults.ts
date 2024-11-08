import type { MultiPage } from "../../common/multiPage.ts";
import type { PlayerResultData } from "../../player/playerResultData.ts";

export type Etf2lPlayerResults = MultiPage & {
  data: PlayerResultData[];
};