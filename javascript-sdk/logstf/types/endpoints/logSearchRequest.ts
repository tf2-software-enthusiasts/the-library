/**
 * The request to search for logs
 */
export type LogSearchRequest = {
  /**
   * The title of the log
   */
  title: string | null;

  /**
   * The map of the log
   */
  map: string | null;

  /**
   * The steamid of the uploader
   */
  uploader: string | null;
  /**
   * The list of steamids that played in the log
   */
  player: string[] | null;

  /**
   * The number of entries to return
   */
  limit: number;

  /**
   * The number of entries to skip
   */
  offset: number;
};
