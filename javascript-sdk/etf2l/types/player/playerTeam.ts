import type { TeamCompetition } from "../team/mod.ts";

export type PlayerTeam = {
    competitions: TeamCompetition;
    country: string;
    homepage: string;
    id: number;
    irc: {
      channel: string | null;
      network: string | null;
    };
    name: string;
    server: string;
    steam: {
      avatar: string;
      steam_group: string | null;
    };
    tag: string;
    type: string;
    urls: {
        matches: string;
        results: string;
        self: string;
        transfers: string;
    };
};