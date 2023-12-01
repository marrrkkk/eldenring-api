/**
 * Represents data related to talismans in Elden Ring.
 * @interface
 */
export interface TalismanData {
  /**
   * The unique identifier of the talisman.
   * @type {string}
   * @example "17f698e1ea9l0i2sy8csbpc3y128lo"
   */
  id: string;

  /**
   * The name of the talisman.
   * @type {string}
   * @example "Shard Of Alexander"
   */
  name: string;

  /**
   * The file path or URL to the image representing the talisman.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/talismans/17f698e1ea9l0i2sy8csbpc3y128lo.png"
   */
  image: string;

  /**
   * The description of the talisman.
   * @type {string}
   * @example "Shard of the late Alexander, a shattered warrior jar."
   */
  description: string;

  /**
   * The effect or ability provided by the talisman.
   * @type {string}
   * @example "Greatly boosts the attack power of skills."
   */
  effect: string;
}
