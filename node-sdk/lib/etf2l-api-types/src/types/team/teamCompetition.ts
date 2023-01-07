import type { CompetitionResultsDivision } from "types/competition/competitionResultsDivision";

export type TeamCompetition = {
  category: string;
  competition: string;
  division: Omit<CompetitionResultsDivision, "id">;
  url: string;
};