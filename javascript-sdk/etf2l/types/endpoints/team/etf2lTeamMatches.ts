import type { Status } from "../../common/status.ts";
import type { TeamMatch } from "../../team/teamMatch.ts";

export type Etf2lTeamMatches = {
  matches: TeamMatch;
  status: Status;
};