import type { CompetitionMatches } from "../../competition/competitionMatches.ts";
import type { Status } from "../../common/status.ts";

export type Etf2lCompetitionMatches = {
  matches: CompetitionMatches;
  status: Status;
};
