import type { LogSearchRequest } from "./logSearchRequest.ts";

/**
 * The result of a search request
 */
export type LogSearchResponse = {
  /**
   * A flag that determines the success of the operation
   */
  success: boolean;
  /**
   * The number of results
   */
  results: number;

  /**
   * The total number of results
   */
  total: number;
  /**
   * The parameters used in the search request
   */
  parameters: LogSearchRequest;

  /**
   * The results
   */
  logs: [
    {
      /**
       * The id of the log
       */
      id: number;

      /**
       * The title of the log
       */
      title: string;

      /**
       * The map that was played
       */
      map: string;

      /**
       * The date the game was played on
       */
      date: number;

      /**
       * The number of views the log has
       */
      views: number;

      /**
       * The number of players in the log
       */
      players: number;
    }
  ];
};
