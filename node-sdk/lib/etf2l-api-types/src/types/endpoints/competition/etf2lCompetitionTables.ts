import type { CompetitionTable } from "types/competition";

export type Etf2lCompetitionTables = {
    tables: {
        [division: string]: CompetitionTable[];
    }
};