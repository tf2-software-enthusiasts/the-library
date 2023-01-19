import type { MultiPage } from "types/common/multiPage";
import type { PlayerTransferData } from "types/player/playerTransferData";

export type Etf2lPlayerTransfers = {
  data: PlayerTransferData[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: MultiPage;
};