import type { CompetitionResultsData } from "./competitionResultsData";
import type { MultiPage } from "../common/multiPage";

export type CompetitionResults = MultiPage & {
  data: CompetitionResultsData[];
};