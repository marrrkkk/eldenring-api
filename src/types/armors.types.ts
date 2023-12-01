import { common } from "./interfaces";

/**
 * Represents data related to armor in Elden Ring.
 * @interface
 */
export interface ArmorData {
  /**
   * The unique identifier of the armor.
   * @type {string}
   * @example "17f69515b49l0i0nbno079cqzlskebf"
   */
  id: string;

  /**
   * The name of the armor.
   * @type {string}
   * @example "All-knowing Armor"
   */
  name: string;

  /**
   * The file path or URL to the image representing the armor.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png"
   */
  image: string;

  /**
   * The description of the armor.
   * @type {string}
   * @example "Armor set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be."
   */
  description: string;

  /**
   * The category or type of the armor.
   * @type {string}
   * @example "Chest Armor"
   */
  category: string;

  /**
   * The weight of the armor.
   * @type {number}
   * @example 10.6
   */
  weight: number;

  /**
   * The damage negation values for the armor.
   * @type {common[]}
   * @example [{ name: "Phy", amount: 12 }, { name: "Strike", amount: 11 }, ...]
   */
  dmgNegation: common[];

  /**
   * The resistance values for the armor.
   * @type {common[]}
   * @example [{ name: "Immunity", amount: 28 }, { name: "Robustness", amount: 46 }, ...]
   */
  resistance: common[];
}
