import type { Status } from "../../common/status.ts";
import type { RecruitmentTeam } from "../../recruitment/mod.ts";

export type Etf2lRecruitmentTeams = {
  recruitment: RecruitmentTeam;
  status: Status;
};
