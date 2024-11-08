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
      id: number;
      title: string;
      map: string;
      date: number;
      views: number;
      players: number;
    }
  ];
};
