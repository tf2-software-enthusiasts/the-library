type TeamInformation = {
  score: number;
  kills: number;
  deaths: number;
  dmg: number;
  charges: number;
  drops: number;
  firstcaps: number;
  caps: number;
};

type MedicStats = {
  advantages_lost: number;
  biggest_advantage_lost: number;
  deaths_with_95_99_uber: number;
  deaths_within_20s_after_uber: number;
  avg_time_before_healing: number;
  avg_time_to_build: number;
  avg_time_before_using: number;
  avg_uber_length: number;
};

type PlayerInformation = {
  team: "Red" | "Blue";
  kills: number;
  deaths: number;
  assists: number;
  suicides: number;
  kapd: string;
  kpd: string;
  dmg: number;
  dmg_real: number;
  dt: number;
  dt_real: number;
  hr: number;
  lks: number;
  as: number;
  dapd: number;
  dapm: number;
  ubers: number;
  drops: number;
  medkits: number;
  medkits_hp: number;
  backstabs: number;
  headshots: number;
  headshots_hit: number;
  sentries: number;
  heal: number;
  cpc: number;
  ic: number;
  medicstats: MedicStats;
  class_stats: ClassStats[];
  ubertypes: {
    [medigunType: string]: number;
  };
};

type ClassStats = {
  type: string;
  kills: number;
  assists: number;
  deaths: number;
  dmg: number;
  weapon: {
    [weaponName: string]: {
      kills: number;
      dmg: number;
      avg_dmg: number;
      shots: number;
      hits: number;
    };
  };
  total_time: number;
};

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
  rounds: [];
  healspread: {};
  classkills: {};
  classdeaths: {};
  classkillassists: {};
  chat: [];
  info: {};
  killstreaks: [];
};
