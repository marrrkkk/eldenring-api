import { common, scale } from '../types/interfaces';
/**
 * Represents data related to weapons in Elden Ring.
 * @interface
 */
export interface WeaponData {
    /**
     * The unique identifier of the weapon.
     * @type {string}
     * @example "17f6946d08bl0i1pfb4sevs913hvu"
     */
    id: string;
    /**
     * The name of the weapon.
     * @type {string}
     * @example "Rivers Of Blood"
     */
    name: string;
    /**
     * The file path or URL to the image representing the weapon.
     * @type {string}
     * @example "https://eldenring.fanapis.com/images/weapons/17f6946d08bl0i1pfb4sevs913hvu.png"
     */
    image: string;
    /**
     * The description of the weapon.
     * @type {string}
     * @example "Weapon of Okina, swordsman from the Land of Reeds. A cursed weapon that has felled countless men.  When Mohg, the Lord of Blood, first felt Okina's sword, and madness, upon his flesh, he had a proposal, to offer Okina the life of a demon, whose thirst would never go unsated."
     */
    description: string;
    /**
     * The category or type of the weapon.
     * @type {string}
     * @example "Katana"
     */
    category: string;
    /**
     * The weight of the weapon.
     * @type {number}
     * @example 6.5
     */
    weight: number;
    /**
     * The attack values associated with the weapon.
     * @type {common[]}
     * @example [{ name: "Phy", amount: 68 }, { name: "Mag", amount: 0 }, ...]
     */
    attack: common[];
    /**
     * The defense values provided by the weapon.
     * @type {common[]}
     * @example [{ name: "Phy", amount: 47 }, { name: "Mag", amount: 31 }, ...]
     */
    defence: common[];
    /**
     * The common requirements for wielding the weapon.
     * @type {common[]}
     * @example [{ name: "Str", amount: 12 }, { name: "Dex", amount: 18 }]
     */
    requiredAttributes: common[];
    /**
     * The attributes the weapon scales with.
     * @type {scale[]}
     * @example [{ name: "Str", scaling: E }, { name: "Dex", scaling: D }]
     */
    scalesWith: scale[];
}
