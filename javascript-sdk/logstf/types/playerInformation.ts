import type { ClassStats } from "./classStats.ts";
import type { TeamType } from "./enums/teamType.ts";
import type { MedicStats } from "./medicStats.ts";

export type PlayerInformation = {
  team: TeamType;
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
