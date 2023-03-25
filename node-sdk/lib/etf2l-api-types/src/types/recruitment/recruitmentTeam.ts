import type { MultiPage } from "types/common/multiPage";
import type { RecruitmentDataTeam } from "./recruitmentDataTeam";

export type RecruitmentTeam = MultiPage & {
  data: RecruitmentDataTeam[];
};