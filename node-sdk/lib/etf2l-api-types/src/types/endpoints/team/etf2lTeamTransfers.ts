import type { MultiPage } from "types/common/multiPage";
import type { Team } from "types/team/team";

export type Etf2lTeamTransfer = {
  data: Team;
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: MultiPage;
};