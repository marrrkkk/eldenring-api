import { common } from '../types/interfaces';
/**
 * Represents data related to sorceries in Elden Ring.
 * @interface
 */
export interface SorceryData {
    /**
     * The unique identifier of the sorcery.
     * @type {string}
     * @example "17f69383db4l0hykt8reipbquz8e6t"
     */
    id: string;
    /**
     * The name of the sorcery.
     * @type {string}
     * @example "Comet Azur"
     */
    name: string;
    /**
     * The file path or URL to the image representing the sorcery.
     * @type {string}
     * @example "https://eldenring.fanapis.com/images/sorceries/17f69383db4l0hykt8reipbquz8e6t.png"
     */
    image: string;
    /**
     * The description of the sorcery.
     * @type {string}
     * @example "Legendary sorcery devised by Azur, primeval sorcerer. Fires a tremendous comet in a torrent akin to the distant starry expanse, the place said to be the origin of glintstone. Hold to continue releasing the sorcery's power. When Azur glimpsed into the primeval current, he saw darkness. He was left both bewitched and fearful of the abyss."
     */
    description: string;
    /**
     * The type or category of the sorcery.
     * @type {string}
     * @example "Sorceries"
     */
    type: string;
    /**
     * The cost of casting the sorcery.
     * @type {number}
     * @example 40
     */
    cost: number;
    /**
     * The number of available slots required to equip the sorcery.
     * @type {number}
     * @example 3
     */
    slots: number;
    /**
     * The effect of the sorcery.
     * @type {string}
     * @example "Fires a tremendous comet within a starry torrent"
     */
    effect: string;
    /**
     * The common requirements for casting the sorcery.
     * @type {common[]}
     * @example [{ name: "Intelligence", amount: 60 }, { name: "Faith", amount: 0 }]
     */
    requires: common[];
}
