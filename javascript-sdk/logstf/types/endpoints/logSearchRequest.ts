/**
 * The request to search for logs
 */
export type LogSearchRequest = {
  /**
   * The title of the log
   */
  title?: string;

  /**
   * The map of the log
   */
  map?: string;

  /**
   * The steamid of the uploader
   */
  uploader?: string;
  /**
   * The list of steamids that played in the log
   */
  player?: string[];

  /**
   * The number of entries to return
   * 
   * Note: This cannot exceed 10,000
   * 
   * @default 10
   */
  limit?: number;

  /**
   * The number of entries to skip
   * 
   * @default 0
   */
  offset?: number;
};
