//import type { Status } from "types/common/status.ts";
import type { RecruitmentTeam } from "../../recruitment/mod.ts";

export type Etf2lRecruitmentTeams = {
  recruitment: RecruitmentTeam;
  status: { status: number, message: string }; // Status;
};