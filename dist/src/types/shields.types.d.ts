import { common, scale } from '../types/interfaces';
/**
 * Represents data related to shields in Elden Ring.
 * @interface
 */
export interface ShieldData {
    /**
     * The unique identifier of the shield.
     * @type {string}
     * @example "17f69c62fe8l0i124u8fi4nc7dbfbf"
     */
    id: string;
    /**
     * The name of the shield.
     * @type {string}
     * @example "Buckler"
     */
    name: string;
    /**
     * The file path or URL to the image representing the shield.
     * @type {string}
     * @example "https://eldenring.fanapis.com/images/shields/17f69c62fe8l0i124u8fi4nc7dbfbf.png"
     */
    image: string;
    /**
     * The description of the shield.
     * @type {string}
     * @example "A small metal roundshield. The bump in the center enables parrying techniques. A well-timed parry can break an enemy's stance, allowing a critical hit. Best suited for those prepared to take the risk to reap their reward."
     */
    description: string;
    /**
     * The category or type of the shield.
     * @type {string}
     * @example "Small Shield"
     */
    category: string;
    /**
     * The weight of the shield.
     * @type {number}
     * @example 1.5
     */
    weight: number;
    /**
     * The attack values associated with the shield.
     * @type {common[]}
     * @example [{ name: "Phy", amount: 68 }, { name: "Mag", amount: 0 },...]
     */
    attack: common[];
    /**
     * The defense values provided by the shield.
     * @type {common[]}
     * @example [{ name: "Phy", amount: 58 }, { name: "Mag", amount: 28 },...]
     */
    defence: common[];
    /**
     * The common requirements for wielding the shield.
     * @type {common[]}
     * @example [{ name: "Str", amount: 8 }, { name: "Dex", amount: 13 }]
     */
    requiredAttributes: common[];
    /**
     * The attributes the shield scales with.
     * @type {scale[]}
     * @example [{ name: "Str", scaling: E }, { name: "Dex", scaling: D }]
     */
    scalesWith: scale[];
}
