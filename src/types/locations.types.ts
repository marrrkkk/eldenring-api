/**
 * Represents data related to locations in Elden Ring.
 * @interface
 */
export interface LocationData {
  /**
   * The unique identifier of the location.
   * @type {string}
   * @example "17f697edfb9l0i2m79bx2q2xwbbjtl"
   */
  id: string;

  /**
   * The name of the location.
   * @type {string}
   * @example "Coastal Cave"
   */
  name: string;

  /**
   * The file path or URL to the image representing the location.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/locations/17f697edfb9l0i2m79bx2q2xwbbjtl.png"
   */
  image: string;

  /**
   * The region of the location in the map.
   * @type {string}
   * @example "Limegrave"
   */
  region: string;

  /**
   * The description of the location.
   * @type {string}
   * @example "Coastal Cave is a dark opening on the side of a cliff. Its mossy depths are overrun by hostile humanoid creatures, but those who brave it may find passage to new lands"
   */
  description: string;
}
