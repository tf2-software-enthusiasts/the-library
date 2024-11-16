import type { CompetitionTable } from "../../competition/mod.ts";

export type Etf2lCompetitionTables = {
  tables: {
    [division: string]: CompetitionTable[];
  };
};
