import type { MultiPage } from "types/common/multiPage";
import type { RecruitmentData } from "./recruitmentData";

export type Recruitment = MultiPage & {
  data: RecruitmentData;
};