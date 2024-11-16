import type { ChatMessage } from "../chat.ts";
import type { Killstreak } from "../killstreak.ts";
import type { TeamType } from "../mod.ts";
import type { PlayerInformation } from "../playerInformation.ts";
import type { RoundEvent } from "../roundEvent.ts";
import type { TeamInformation } from "../teamInformation.ts";
import type { TeamRoundInfo } from "../teamRoundInfo.ts";
import type { Tf2ClassMap } from "../tf2ClassMap.ts";

/**
 * The information for a given log
 */
export type LogById = {
  /**
   * Gets the version of the parser used
   */
  version: string;

  /**
   * Gets the error that occurred
   */
  error?: string;

  /**
   * Gets the length of the log
   */
  length: number;

  /**
   * Gets a flag that determines if the request was successful
   */
  success: boolean;

  /**
   * Gets the aggregated information for each team
   */
  teams: { Red: TeamInformation; Blue: TeamInformation };

  /**
   * Gets a list of the players to their stats
   */
  players: {
    [steamIdThree: string]: PlayerInformation;
  };

  /**
   * Gets the list of the players and their aliases used in the game
   */
  names: {
    [steamIdThree: string]: string;
  };

  /**
   * Gets information about the round
   */
  rounds: [
    {
      /**
       * Gets the start date of the round
       */
      start_time: number;
      /**
       * Gets the winner of the round
       */
      winner: TeamType;
      /**
       * Gets the stats of the round
       */
      team: {
        Blue: TeamRoundInfo;
        Red: TeamRoundInfo;
      };
      /**
       * Gets the events of the round
       */
      events: RoundEvent[];

      /**
       * Gets the player's stats of the round
       */
      players: {
        [steamIdThree: string]: {
          /**
           * Gets the number of kills the player had this round
           */
          kills: number;

          /**
           * Gets the amount of damage the player dealt
           */
          dmg: number;
        };
      };

      /**
       * Gets the team who had first cap
       */
      firstcap: TeamType;

      /**
       * Gets the length of the round
       */
      length: number;
    }
  ];

  /**
   * Gets the stats of the healspread to each team member
   */
  healspread: {
    [steamIdThree: string]: {
      /**
       * The number of heals the player received
       */
      [steamIdThree: string]: number;
    };
  };

  /**
   * Gets the stats of each player and the type of kills they got
   */
  classkills: {
    [steamIdThree: string]: Tf2ClassMap;
  };

  /**
   * Gets the stats of each player and how many times they died to that class
   */
  classdeaths: {
    [steamIdThree: string]: Tf2ClassMap;
  };

  /**
   * Gets the stats of each player and how assists of kills they had to that class
   */
  classkillassists: {
    [steamIdThree: string]: Tf2ClassMap;
  };

  /**
   * Gets the chat messages
   */
  chat: ChatMessage[];

  /**
   * Gets additional information about the log
   */
  info: {
    /**
     * Gets the map that was played
     */
    map: string;

    /**
     * Gets whether supplemental information is available
     */

    supplemental: boolean;
    /**
     * Gets the total length of the log
     */
    total_length: number;

    /**
     * Gets whether real damage is enabled
     */
    hasRealDamage: boolean;

    /**
     * Gets whether the log has weapon damage
     */
    hasWeaponDamage: boolean;

    /**
     * whether the log has accuracy reports
     */
    hasAccuracy: boolean;

    /**
     * Gets whether the log has HTP enabled
     */
    hasHP: boolean;

    /**
     * Gets whether the log has real HP enabled
     */
    hasHP_real: boolean;

    /**
     * whether the log has headshots
     */
    hasHS: boolean;

    /**
     * Gets whether the log has headshots
     */
    hasHS_hit: boolean;

    /**
     * whether the log has backstabs
     */
    hasBS: boolean;

    /**
     * whether the log has captures
     */
    hasCP: boolean;

    /**
     * whether the log has SB
     */
    hasSB: boolean;

    /**
     * Gets whether the log has DT
     */
    hasDT: boolean;

    /**
     * Gets whether the log has airshots
     */
    hasAS: boolean;

    /**
     * Gets whether HR enabled
     */
    hasHR: boolean;

    /**
     * Gets whether intelligence was present
     */
    hasIntel: boolean;

    /**
     * Gets the list of notifications
     *
     * This is currently unused
     */
    notifications: [];

    /**
     * Gets the title of the log
     */
    title: string;
    /**
     * Gets the date the log was uploaded
     */
    date: number;

    /**
     * Information about the uploader
     */
    uploader: {
      /**
       * Gets the steam id of the uploader
       */
      id: string;

      /**
       * Gets the name of the uploader
       */
      name: string;

      /**
       * Gets information about how the log was uploaded
       */
      info: string;
    };
  };

  /**
   * Gets the killstreak information
   */
  killstreaks: Killstreak[];
};
