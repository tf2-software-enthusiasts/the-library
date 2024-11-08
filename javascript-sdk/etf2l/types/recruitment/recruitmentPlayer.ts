import type { MultiPage } from "../common/multiPage.ts";
import type { RecruitmentDataPlayer } from "./recruitmentDataPlayer.ts";

export type RecruitmentPlayer = MultiPage & {
  data: RecruitmentDataPlayer[];
};