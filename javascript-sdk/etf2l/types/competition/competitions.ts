import type { MultiPage } from "../common/multiPage.ts";
import type { CompetitionElement } from "./competitionElement.ts";

export type Competitions = MultiPage & {
  data: CompetitionElement[];
};
