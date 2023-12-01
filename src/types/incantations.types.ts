import { common } from '../types/interfaces';

/**
 * Represents data related to incantations in Elden Ring.
 * @interface
 */
export interface IncantationData {
  /**
   * The unique identifier of the incantation.
   * @type {string}
   * @example "17f69160ac9l0hynthagycs7dr7gq7"
   */
  id: string;

  /**
   * The name of the incantation.
   * @type {string}
   * @example "Black Blade"
   */
  name: string;

  /**
   * The file path or URL to the image representing the incantation.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/incantations/17f69160ac9l0hynthagycs7dr7gq7.png"
   */
  image: string;

  /**
   * The description of the incantation.
   * @type {string}
   * @example "Power gleaned from the remembrance of Maliketh."
   */
  description: string;

  /**
   * The type or category of the incantation.
   * @type {string}
   * @example "Incantations"
   */
  type: string;

  /**
   * The cost of casting the incantation.
   * @type {number}
   * @example 26
   */
  cost: number;

  /**
   * The number of available slots required to equip the incantation.
   * @type {number}
   * @example 2
   */
  slots: number;

  /**
   * The effect of the incantation.
   * @type {string}
   * @example "Black blade spinning slash that emits wave of light."
   */
  effect: string;

  /**
   * The common requirements for casting the incantation.
   * @type {common[]}
   * @example [{ name: "Intelligence", amount: 0 }, { name: "Faith", amount: 46 }, ...]
   */
  requires: common[];
}
