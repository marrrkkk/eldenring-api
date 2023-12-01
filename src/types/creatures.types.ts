/**
 * Represents data related to creatures in Elden Ring.
 * @interface
 */
export interface CreatureData {
  /**
   * The unique identifier of the creature.
   * @type {string}
   * @example "17f69f93e2cl0i6ywpl2tdr0v79vp8"
   */
  id: string;

  /**
   * The name of the creature.
   * @type {string}
   * @example "Turtle"
   */
  name: string;

  /**
   * The file path or URL to the image representing the creature.
   * @type {string}
   * @example "https://eldenring.fanapis.com/images/creatures/17f69f93e2cl0i6ywpl2tdr0v79vp8.png"
   */
  image: string;

  /**
   * The description of the creature.
   * @type {string}
   * @example "Turtles are passive creatures almost driven to extinction by those seeking its meat, said to have curative properties"
   */
  description: string;

  /**
   * The location where the creature can be encountered.
   * @type {string}
   * @example "West Limgrave"
   */
  location: string;

  /**
   * The items dropped by the creature upon defeat.
   * @type {string[]}
   * @example ["Turtle Neck Meat", "5 Runes"]
   */
  drops: string[];
}
