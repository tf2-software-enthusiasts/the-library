import type { TeamCompetition } from "./teamCompetition";
import type { TeamPlayer } from "./teamPlayer";

export type Team = {
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
  urls: {
    matches: string;
    results: string;
    self: string;
    transfers: string;
  };
  players: TeamPlayer[]
  name_changes: {
    from: string;
    to: string;
    time: number;
  }[]
};