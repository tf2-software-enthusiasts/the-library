export type UploadRequest = {
  /**
   * The API key to use
   */
  key: string;

  /**
   * The name of the demo file
   */
  name: string;

  /**
   * The name of RED team
   */
  red: string;

  /**
   * The name of BLU team
   */
  blu: string;

  /**
   * The demo file to be uploaded
   */
  demo: Blob;
};

/**
 * The request object for searching demos
 */
export type DemoSearchRequest = {
  /**
   * The name of the map
   */
  map: string;

  /**
   * The type of gamemode
   */
  type: "4v4" | "6v6" | "hl";

  /**
   * The list of players that have played in the demo
   */
  players: string[];
  /**
   * The max date the demo was uploaded on
   */
  before: string;
  /**
   * The min date the demo was uploaded on
   */
  after: string;

  /**
   * The min demo id
   */
  before_id: string;
  /**
   * The max demo id
   */
  after_id: string;
};

export type SortType = "ASC" | "DESC";
