/**
 * The options for uploading a log
 */
export type LogUploadRequest = {
  /**
   * The title of the request
   */
  title: string;

  /**
   * The map that was played
   */
  map: string | null;

  /**
   * (Optional- default null) The name of the uploader
   */
  uploader: string | null;

  /**
   * (Optional- default null) The log id to update instead of uploading a new log
   */
  updatelog: string | null;
};
