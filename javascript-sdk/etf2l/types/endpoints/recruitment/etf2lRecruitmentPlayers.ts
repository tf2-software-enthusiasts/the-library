import type { RecruitmentPlayer } from "../../recruitment/recruitmentPlayer.ts";
//import type { Status } from "types/common/status";

export type Etf2lRecruitmentPlayers = {
  recruitment: RecruitmentPlayer;
  status: { status: number; message: string }; // Status;
};
