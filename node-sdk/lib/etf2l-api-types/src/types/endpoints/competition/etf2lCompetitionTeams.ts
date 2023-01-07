import type { CompetitionTeams } from "types/competition/competitionTeams";
import type { Status } from "types/common/status";

export type etf2lCompetitionTeams = {
    status: Status;
    teams: CompetitionTeams;
};