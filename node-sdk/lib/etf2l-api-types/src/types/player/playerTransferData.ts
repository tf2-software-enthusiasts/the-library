import type { MatchPlayer } from "types/matches/matchPlayer";

export type PlayerTransferData = {
  //TODO: Create ShortPlayer type
  by: MatchPlayer;
  //TODO: Create ShortTeam type
  team: {
    id: number;
    name: string;
    steam: {
      avatar: string;
      group: string;
    };
    //TODO: Create enum
    type: string;
    url: string;
    
  };
  time: number;
  //TODO: enum
  type: string;
}