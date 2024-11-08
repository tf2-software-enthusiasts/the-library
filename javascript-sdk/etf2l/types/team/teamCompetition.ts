import type { CompetitionResultsDivision } from "../competition/competitionResultsDivision.ts";

export type TeamCompetition = {
  [competitionId: string]: {
    category: string;
    competition: string;
    division: Omit<CompetitionResultsDivision, "id">;
    url: string;
  }
};