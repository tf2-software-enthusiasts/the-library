import type { Status } from "../../common/status.ts";
import type { Team } from "../../team/team.ts";

export type Etf2lTeam = {
  team: Team;
  status: Status;
};
