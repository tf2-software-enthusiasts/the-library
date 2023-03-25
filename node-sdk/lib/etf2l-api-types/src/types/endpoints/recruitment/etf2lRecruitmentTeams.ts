//import type { Status } from "types/common/status";
import type { RecruitmentTeam } from "types/recruitment";

export type Etf2lRecruitmentTeams = {
  recruitment: RecruitmentTeam;
  status: { status: number, message: string }; // Status;
};