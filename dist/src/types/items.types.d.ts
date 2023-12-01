/**
 * Represents data related to items in Elden Ring.
 * @interface
 */
export interface ItemData {
    /**
     * The unique identifier of the item.
     * @type {string}
     * @example "17f697244e5l0i1z1detjfd6slms6p"
     */
    id: string;
    /**
     * The name of the item.
     * @type {string}
     * @example "Bloody Finger"
     */
    name: string;
    /**
     * The file path or URL to the image representing the item.
     * @type {string}
     * @example "https://eldenring.fanapis.com/images/items/17f697244e5l0i1z1detjfd6slms6p.png"
     */
    image: string;
    /**
     * The description of the item.
     * @type {string}
     * @example "Item for online play. Attempts an invasion of another player's world. If successful, your objective will be to defeat the Host of Fingers of the world to which you were summoned. The nail of this finger is shot through with streaks of fresh, glistening blood. The finger's sickly pale skin feels nothing now, but the nail still aches with sweetest pain."
     */
    description: string;
    /**
     * The type or category of the item.
     * @type {string}
     * @example "Reusable"
     */
    type: string;
    /**
     * The effect or functionality of the item.
     * @type {string}
     * @example "Attempts invasion of other player's world."
     */
    effect: string;
}
