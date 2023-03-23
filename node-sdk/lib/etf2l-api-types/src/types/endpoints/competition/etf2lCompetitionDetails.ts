import type { CompetitionDetails } from "types/competition/competitionDetails";
import type { Status } from "types/common/status";

export type Etf2lCompetitionDetails = {
    competition: CompetitionDetails;
    status: Status;
};