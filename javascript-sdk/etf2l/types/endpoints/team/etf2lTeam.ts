import type { Status } from "../../common/status.ts";
import type { Team } from "../../team/team";

export type Etf2lTeam = {
  team: Team;
  status: Status;
};
