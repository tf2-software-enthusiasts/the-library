import type { MultiPageSmall } from "types/common";
import type { PlayerTransferData } from "types/player/playerTransferData";

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