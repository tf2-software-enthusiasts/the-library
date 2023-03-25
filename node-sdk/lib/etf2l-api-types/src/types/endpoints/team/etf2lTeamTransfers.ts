import type { MultiPageSmall } from "types/common";
import type { TeamTransferData } from "types/team";

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