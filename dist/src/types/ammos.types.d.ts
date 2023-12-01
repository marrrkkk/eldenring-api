import { common } from '../types/interfaces';
/**
 * Represents data related to ammunition in Elden Ring.
 * @interface
 */
export interface AmmoData {
    /**
     * The unique identifier of the ammunition.
     * @type {string}
     * @example "17f699c4de5l0i0a5a69f9ja6l52sm"
     */
    id: string;
    /**
     * The name of the ammunition.
     * @type {string}
     * @example "Bloodbone Bolt"
     */
    name: string;
    /**
     * The file path or URL to the image representing the ammunition.
     * @type {string}
     * @example "https://eldenring.fanapis.com/images/ammos/17f699c4de5l0i0a5a69f9ja6l52sm.png"
     */
    image: string;
    /**
     * The description of the ammunition.
     * @type {string}
     * @example "Bolt carved from animal bone. The tip is daubed with a blood tincture. Afflicts targets with blood loss. Craftable item."
     */
    description: string;
    /**
     * The type or category of the ammunition.
     * @type {string}
     * @example "Pierce"
     */
    type: string;
    /**
     * The passive effect associated with the ammunition.
     * @type {string}
     * @example "Causes blood loss build up (50)"
     */
    passive: string;
    /**
     * The attack power values for the ammunition.
     * @type {common[]}
     * @example [{ name: "physical", amount: 25 }, { name: "magic", amount: 0 }, ...]
     */
    attackPower: common[];
}
