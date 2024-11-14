import type { CompetitionTeams } from "../../competition/competitionTeams.ts";
import type { Status } from "../../common/status.ts";

export type Etf2lCompetitionTeams = {
  status: Status;
  teams: CompetitionTeams;
};
