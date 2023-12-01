/**
 * Represents data related to spirits in Elden Ring.
 * @interface
 */
export interface SpiritData {
  /**
   * The unique identifier of the spirit.
   * @type {string}
   * @example "17f6970a4e0l0i2rcxy5mhe8469uy7"
   */
  id: string;

  /**
   * The name of the spirit.
   * @type {string}
   * @example "Black Knife Tiche"
   */
  name: string;

  /**
   * The file path or URL to the image representing the spirit.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/spirits/17f6970a4e0l0i2rcxy5mhe8469uy7.png"
   */
  image: string;

  /**
   * The description of the spirit.
   * @type {string}
   * @example "Legendary ashen remains. Use to summon the spirit of Black Knife Tiche."
   */
  description: string;

  /**
   * The focus points (FP) cost for summoning the spirit.
   * @type {number}
   * @example 132
   */
  fpCost: number;

  /**
   * The health points (HP) cost for summoning the spirit.
   * @type {number}
   * @example 0
   */
  hpCost: number;

  /**
   * The effect or ability provided by the spirit.
   * @type {string}
   * @example "Summons spirit of Black Knife Tiche"
   */
  effect: string;
}
