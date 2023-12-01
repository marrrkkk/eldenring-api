/**
 * Represents data related to non-playable characters (NPCs) in Elden Ring.
 * @interface
 */
export interface NpcData {
  /**
   * The unique identifier of the NPC.
   * @type {string}
   * @example "17f69af3e48l0i2ojme5z01n0gziz"
   */
  id: string;

  /**
   * The name of the NPC.
   * @type {string}
   * @example "Roderika"
   */
  name: string;

  /**
   * The file path or URL to the image representing the NPC.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/npcs/17f69af3e48l0i2ojme5z01n0gziz.png"
   */
  image: string;

  /**
   * A memorable quote associated with the NPC.
   * @type {string}
   * @example "Everyone who came with me. They crossed the sea for me. They fought, for me. Heh... Only to have their arms taken. Their legs taken. Even their heads...taken. Taken and stuck to the spider. "
   */
  quote: string;

  /**
   * The location where the NPC can be found.
   * @type {string}
   * @example "Stormhill Shack, Roundtable Hold"
   */
  location: string;

  /**
   * The role or function of the NPC in the game.
   * @type {string}
   * @example "Spirit-Tuner"
   */
  role: string;
}
