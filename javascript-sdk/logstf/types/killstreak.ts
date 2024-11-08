/**
 * Represents a killstreak during the game
 */
export type Killstreak = {
  /**
   * The steam id that got the killstreak
   */
  steamid: string;
  /**
   * The number of kills in the killstreak
   *
   */
  streak: number;

  /**
   * The time which the killstreak occurred
   */
  time: number;
};
