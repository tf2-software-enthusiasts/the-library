import type { CompetitionResultsData } from "./competitionResultsData.ts";
import type { MultiPage } from "../common/multiPage.ts";

export type CompetitionResults = MultiPage & {
  data: CompetitionResultsData[];
};
