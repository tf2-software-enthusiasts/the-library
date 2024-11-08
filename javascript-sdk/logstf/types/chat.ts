/**
 * A chat message
 */
export type ChatMessage = {
  /**
   * The steam id of the player that said the message
   */
  steamid: string;

  /**
   * The name of the player
   */
  name: string;

  /**
   * The content of the message
   */
  msg: string;
};
