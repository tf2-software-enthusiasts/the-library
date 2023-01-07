import type { Status } from "types/common/status";
import type { TeamMatch } from "types/team/teamMatch";

export type Etf2lTeamMatches = {
  matches: TeamMatch;
  status: Status;
};