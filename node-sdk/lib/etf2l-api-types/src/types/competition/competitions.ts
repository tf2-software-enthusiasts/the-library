import type { MultiPage } from "types/common/multiPage";
import type { CompetitionElement } from "./competitionElement";

export type Competitions = MultiPage & {
  data: CompetitionElement[];
};
