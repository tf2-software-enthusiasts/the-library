import type { MultiPageSmall } from "../../common/mod.ts";
import type { PlayerTransferData } from "../../player/playerTransferData.ts";

export type Etf2lPlayerTransfers = {
  data: PlayerTransferData[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: MultiPageSmall;
};
