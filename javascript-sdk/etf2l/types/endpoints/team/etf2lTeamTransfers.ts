import type { MultiPageSmall } from "../../common/mod.ts";
import type { TeamTransferData } from "../../team/mod.ts";

export type Etf2lTeamTransfers = {
  data: TeamTransferData[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: MultiPageSmall;
};