import type { CompetitionTeamsData } from "./competitionTeamsData.ts";
import type { MultiPage } from "../common/multiPage.ts";

export type CompetitionTeams = MultiPage & {
  data: CompetitionTeamsData[];
};