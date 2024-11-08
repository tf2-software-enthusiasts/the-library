import type { ClassStats } from "./classStats.ts";
import type { TeamType } from "./enums/teamType.ts";
import type { MedicStats } from "./medicStats.ts";

/**
 * The general information for a given player
 */
export type PlayerInformation = {
  /**
   * The team the player was on
   */
  team: TeamType;

  /**
   * The number of kills the player got
   */
  kills: number;

  /**
   * The number of deaths
   */
  deaths: number;

  /**
   * The number of assists
   */
  assists: number;

  /**
   * The number of times the player suicided
   */
  suicides: number;

  /**
   * The kills and assists per death
   */
  kapd: string;
  
  /**
   * The kills per death
   */
  kpd: string;

  /**
   * The amount of damage dealt
   */
  dmg: number;

  /**
   * The real number of damage dealt
   */
  dmg_real: number;

  /**
   * The damage taken
   */
  dt: number;

  /**
   * The real amount of damage taken
   */
  dt_real: number;

  /**
   * The number of heals received
   */
  hr: number;

  /**
   * The number of health packs picked up
   */
  lks: number;

  /**
   * The number of airshots
   */
  as: number;

  /**
   * The damage per death
   */
  dapd: number;

  /**
   * The damage per death averaged by minute
   */
  dapm: number;

  /**
   * The amount of ubers
   */
  ubers: number;

  /**
   * The amount of drops
   */
  drops: number;

  /**
   * The amount of medkits used
   */
  medkits: number;

  /**
   * The total health recovered with medkits
   */
  medkits_hp: number;

  /**
   * The number of backstabs
   */
  backstabs: number;

  /**
   * The number of headshots
   */
  headshots: number;

  /**
   * The number of headshots hit
   */
  headshots_hit: number;

  /**
   * The number of sentries built
   */
  sentries: number;

  /**
   * The amount that was healed
   */
  heal: number;

  /**
   * The CPC
   */
  cpc: number;

  /**
   * The IC
   */
  ic: number;

  /**
   * The medic specific stats
   */
  medicstats: MedicStats;

  /**
   * The stats of each class
   */
  class_stats: ClassStats[];

  /**
   * The types of medigun charges the player used
   */
  ubertypes: {
    [medigunType: string]: number;
  };
};
