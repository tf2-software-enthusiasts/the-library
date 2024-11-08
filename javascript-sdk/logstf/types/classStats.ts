/**
 * Statistics for each type of class that the player played as
 */
export type ClassStats = {
  /**
   * The class that was played
   */
  type: string;

  /**
   * The number of kills
   */
  kills: number;

  /**
   * The number of assists
   */
  assists: number;

  /**
   * The number of deaths
   */
  deaths: number;

  /**
   * The total damage dealt
   */
  dmg: number;

  /**
   * Statistics about the weapons used by the player
   */
  weapon: {
    [weaponName: string]: {
      /**
       * The number of kills with this weapon
       */
      kills: number;

      /**
       * The amount of damage dealt by the weapon
       */
      dmg: number;

      /**
       * The average damage with this weapon
       */
      avg_dmg: number;

      /**
       * The total number of shots with this weapon
       */
      shots: number;

      /**
       * The number of shots that hit another player
       */
      hits: number;
    };
  };
  
  /**
   * The amount of time on this class
   */
  total_time: number;
};
