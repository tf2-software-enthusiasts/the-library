import type { CompetitionDetails } from "../../competition/competitionDetails.ts";
import type { Status } from "../../common/status.ts";

export type Etf2lCompetitionDetails = {
    competition: CompetitionDetails;
    status: Status;
};