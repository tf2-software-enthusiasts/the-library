import type { TeamType } from "./enums/teamType.ts";

/**
 * The event that happens in a round
 */
export type RoundEvent = {
  /**
   * The parsed event that happened
   */
  type: string;

  /**
   * The tick the event occurred at
   */
  time: number;

  /**
   * The team the event belongs to
   */
  team?: TeamType;

  /**
   * The point that was captured
   */
  point?: number;

  /**
   * The id of the player who died
   */
  steamid?: string;

  /**
   * The id of the player that got the kill
   */
  killer?: string;
};
