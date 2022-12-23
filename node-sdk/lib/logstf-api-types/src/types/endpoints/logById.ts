import type { TeamType } from "types/enums/teamType";
import type { PlayerInformation } from "types/playerInformation";
import type { RoundEvent } from "types/roundEvent";
import type { TeamInformation } from "types/teamInformation";
import type { TeamRoundInfo } from "types/teamRoundInfo";
import type { Tf2ClassMap } from "types/tf2ClassMap";

export type LogById = {
  version: string;
  length: number;
  success: boolean;
  teams: { Red: TeamInformation; Blue: TeamInformation };
  players: {
    [steamIdThree: string]: PlayerInformation;
  };
  names: {
    [steamIdThree: string]: string;
  };
  rounds: [
    {
      start_time: number;
      winner: TeamType;
      team: {
        Blue: TeamRoundInfo;
        Red: TeamRoundInfo;
      };
      events: RoundEvent[];
      players: {
        [steamIdThree: string]: {
          kills: number;
          dmg: number;
        };
      };
      firstcap: TeamType;
      length: number;
    }
  ];
  healspread: {
    [steamIdThree: string]: {
      [steamIdThree: string]: number;
    };
  };
  classkills: {
    [steamIdThree: string]: Tf2ClassMap;
  };
  classdeaths: {
    [steamIdThree: string]: Tf2ClassMap;
  };
  classkillassists: {
    [steamIdThree: string]: Tf2ClassMap;
  };
  chat: [
    {
      steamId: string;
      name: string;
      msg: string;
    }
  ];
  info: {
    map: string;
    supplemental: boolean;
    total_length: number;
    hasRealDamage: boolean;
    hasWeaponDamage: boolean;
    hasAccuracy: boolean;
    hasHP: boolean;
    hasHP_real: boolean;
    hasHS: boolean;
    hasHS_hit: boolean;
    hasBS: boolean;
    hasCP: boolean;
    hasSB: boolean;
    hasDT: boolean;
    hasAS: boolean;
    hasHR: boolean;
    hasIntel: boolean;
    notifications: [];
    title: string;
    date: number;
    uploader: {
      id: string;
      name: string;
      info: string;
    };
  };
  killstreaks: [
    {
      steamid: string;
      streak: number;
      time: number;
    }
  ];
};
