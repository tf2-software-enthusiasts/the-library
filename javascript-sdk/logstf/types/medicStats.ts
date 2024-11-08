/**
 * The stats of the medic player
 */
export type MedicStats = {
  /**
   * The number of uber charge advantages that were lost
   */
  advantages_lost: number;

  /**
   * The largest advantage lost
   */
  biggest_advantage_lost: number;

  /**
   * The number of deaths that the medic was close to uber
   */
  deaths_with_95_99_uber: number;
  /**
   * The number of deaths that occurred within 20 seconds after ubering
   */
  deaths_within_20s_after_uber: number;

  /**
   * The average time before healint
   */
  avg_time_before_healing: number;

  /**
   * The average time to build uber charge
   */
  avg_time_to_build: number;

  /**
   * The average time before the uber was used
   */
  avg_time_before_using: number;

  /**
   * The average number of seconds the uber laster
   */
  avg_uber_length: number;
};
