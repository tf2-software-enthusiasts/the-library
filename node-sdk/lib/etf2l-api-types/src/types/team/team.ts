import type { TeamCompetition } from "./teamCompetition";

export type Team = {
  competitions: TeamCompetition;
  country: string;
  homepage: string;
  id: number;
  irc: {
    channel: string;
    network: string;
  };
  name: string;
  server: string;
  //TODO: exists twice
  steam: {
    avatar: string;
    steam_group: string | null;
  };
  tag: string;
  type: string;
  //TODO: could get fancy with types
  urls: {
    matches: string;
    results: string;
    self: string;
    transfers: string;
  };
};