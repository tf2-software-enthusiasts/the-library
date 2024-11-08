/**
 * The response to an upload request
 */
export type LogUploadResponse = {
  /**
   * A flag that determines whether the request was successful
   */
  success: boolean;

  /**
   * The error of the request
   */
  error: string;
  
  /**
   * The unique id of the created log
   */
  log_id: string;

  /**
   * The URL of the uploaded log
   */
  url: string;
};
