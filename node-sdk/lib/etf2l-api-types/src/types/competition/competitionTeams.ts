import type { CompetitionTeamsData } from "./competitionTeamsData";
import type { MultiPage } from "../common/multiPage";

export type CompetitionTeams = MultiPage & {
  data: CompetitionTeamsData[];
};