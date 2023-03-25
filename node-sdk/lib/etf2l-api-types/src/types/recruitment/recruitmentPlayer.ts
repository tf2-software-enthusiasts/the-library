import type { MultiPage } from "types/common/multiPage";
import type { RecruitmentDataPlayer } from "./recruitmentDataPlayer";

export type RecruitmentPlayer = MultiPage & {
  data: RecruitmentDataPlayer[];
};