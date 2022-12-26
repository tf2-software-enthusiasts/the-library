export type Demo = {
  /**
   * Unique ID of the Demo
   */
  id: number;

  /**
   * The download URL for the demo file
   */
  url: string;

  /**
   * The name of the demo file
   */
  name: string;

  /**
   * The name of server during the game
   */
  server: string;

  /**
   * The length of the match in seconds
   */
  duration: number;

  /**
   * The nickname of the user recording the demo
   */
  nick: string;

  /**
   * The name of the map that was played
   */
  map: string;

  /**
   * The time the demo was uploaded as a unix timestamp
   */
  time: number;

  /**
   * The name of the RED team during the match
   */
  red: string;

  /**
   * The name of the BLU team during the match
   */
  blue: string;

  /**
   * The ending score of the RED team
   */
  redScore: number;

  /**
   * The ending score of the BLU team
   */
  blueScore: number;

  /**
   * The number of players in the game
   */
  playerCount: number;

  /**
   * The unique id of the user who uploaded the demo
   */
  uploader: number;
};
