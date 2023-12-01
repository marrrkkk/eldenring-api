import { stats } from '../types/interfaces';

/**
 * Represents data related to character classes in Elden Ring.
 * @interface
 */
export interface ClassData {
  /**
   * The unique identifier of the character class.
   * @type {string}
   * @example "17f69db959fl0i32hhpwdbjko0bj57"
   */
  id: string;

  /**
   * The name of the character class.
   * @type {string}
   * @example "Vagabond"
   */
  name: string;

  /**
   * The file path or URL to the image representing the character class.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/classes/17f69db959fl0i32hhpwdbjko0bj57.png"
   */
  image: string;

  /**
   * The description of the character class.
   * @type {string}
   * @example "A knight exiled from their homeland to wander. A solid, armor-clad origin."
   */
  description: string;

  /**
   * The statistics properties for the character class.
   * @type {stats}
   */
  stats: stats;
}
