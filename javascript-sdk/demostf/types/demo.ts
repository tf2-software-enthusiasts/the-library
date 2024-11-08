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

  /**
   * Gets the hash of the file
   */
  hash: string;

  /**
   * Gets the backend the file is stored on
   */
  backend: string;

  /**
   * Gets the path of the file
   */
  path: string;
};

export type DemoInfo = {
  /**
   * The id of the demo
   */
  id: number;

  /**
   * The URL of the demo
   */
  url: string;

  /**
   * The name of the file
   */
  name: string;

  /**
   * The hostname of the server that uploaded the demo
   */
  server: string;

  /**
   * The duration in ticks of the demo
   */
  duration: 1809;

  /**
   * The nickname of Source TV
   */
  nick: string;

  /**
   * The map that was played
   */
  map: string;

  /**
   * The date the demo was uploaded
   */
  time: number;

  /**
   * The name of the RED team
   */
  red: string;

  /**
   * The name of the BLU team
   */
  blue: string;

  /**
   * The score of the RED team
   */
  redScore: number;

  /**
   * The name of the BLU team
   */
  blueScore: number;

  /**
   * The number of players in the demo
   */
  playerCount: number;

  /**
   * The information about the uploader
   */
  uploader: {
    /**
     * The id of the uploader
     */
    id: number;

    /**
     * The steam id of the uploader
     */
    steamid: string;

    /**
     * The name of the uploader
     */
    name: string;
  };

  /**
   * The information about each player in the demo
   */
  players: [
    {
      /**
       * The id of the player
       */
      id: number;

      /**
       * The user id of the player
       */
      user_id: number;

      /**
       * The name of the player
       */
      name: string;

      /**
       * The team of the player
       */
      team: string;

      /**
       * The class the player played on
       */
      class: string;

      /**
       * The steam id of the user
       */
      steamid: string;

      /**
       * The avatar URL of the player
       */
      avatar: string;

      /**
       * The number of kills the player had
       */
      kills: number;

      /**
       * The number of assists
       */
      assists: number;

      /**
       * The number of times the player died
       */
      deaths: number;
    }
  ];
};
