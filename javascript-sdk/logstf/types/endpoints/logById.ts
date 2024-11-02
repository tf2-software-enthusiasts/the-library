import type { TeamType } from "../mod.ts";
import type { PlayerInformation } from "../playerInformation.ts";
import type { RoundEvent } from "../roundEvent.ts";
import type { TeamInformation } from "../teamInformation.ts";
import type { TeamRoundInfo } from "../teamRoundInfo.ts";
import type { Tf2ClassMap } from "../tf2ClassMap.ts";

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
