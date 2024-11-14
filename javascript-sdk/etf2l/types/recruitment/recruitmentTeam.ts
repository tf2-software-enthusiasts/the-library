import type { MultiPage } from "../common/multiPage.ts";
import type { RecruitmentDataTeam } from "./recruitmentDataTeam.ts";

export type RecruitmentTeam = MultiPage & {
  data: RecruitmentDataTeam[];
};
