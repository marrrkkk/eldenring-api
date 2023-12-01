/**
 * Represents data related to a boss in Elden Ring.
 * @interface
 */
export interface BossData {
    /**
     * The unique identifier of the boss.
     * @type {string}
     * @example "17f69a48308l0i1ux3rigvv37tx84f"
     */
    id: string;
    /**
     * The name of the boss.
     * @type {string}
     * @example "Malenia, Blade Of Miquella"
     */
    name: string;
    /**
     * The file path or URL to the image representing the boss.
     * @type {string}
     * @example "https://eldenring.fanapis.com/images/bosses/17f69a48308l0i1ux3rigvv37tx84f.png"
     */
    image: string;
    /**
     * The region where the boss can be encountered.
     * @type {string}
     * @example "Consecrated Snowfield"
     */
    region: string;
    /**
     * The description of the boss.
     * @type {string}
     * @example "...Heed my words. I am Malenia. Blade of Miquella. And I have never known defeat."
     */
    description: string;
    /**
     * The location where the boss can be encountered.
     * @type {string}
     * @example "Elphael, Brace of the Haligtree"
     */
    location: string;
    /**
     * The items dropped by the boss upon defeat.
     * @type {string[]}
     * @example ["Malenia's Great Rune", "Remembrance of the Rot Goddess", "480,000 Runes"]
     */
    drops: string[];
    /**
     * The health points (HP) of the boss.
     * @type {string}
     * @example "≈26,128"
     */
    healthPoints: string;
}
