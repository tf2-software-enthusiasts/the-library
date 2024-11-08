/**
 * General information about how a team played during the game
 */
export type TeamInformation = {
  /**
   * The amount of points the team earned
   */
  score: number;

  /**
   * The number of kills the team got
   */
  kills: number;

  /**
   * The number of deaths
   */
  deaths: number;

  /**
   * The amount of damage that was dealth
   */
  dmg: number;

  /**
   * The number of uber charges
   */
  charges: number;

  /**
   * The amount of ubers dropped by the team
   */
  drops: number;

  /**
   * The number of captures by the team that were done when the point was neutral
   */
  firstcaps: number;

  /**
   * The number of caps the team had overall
   */
  caps: number;
};
