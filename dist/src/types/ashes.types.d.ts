/**
 * Represents data related to ashes in Elden Ring.
 * @interface
 */
export interface AshesData {
    /**
     * The unique identifier of the ashes.
     * @type {string}
     * @example "17f699db6b0l0hzn9xsxxwtgyfky3"
     */
    id: string;
    /**
     * The name of the ashes.
     * @type {string}
     * @example "Ash Of War: Prelate's Charge"
     */
    name: string;
    /**
     * The file path or URL to the image representing the ashes.
     * @type {string}
     * @example "https://eldenring.fanapis.com/images/ashes/17f699db6b0l0hzn9xsxxwtgyfky3.png"
     */
    image: string;
    /**
     * The description of the ashes.
     * @type {string}
     * @example `This Ash of War grants an armament the Flame affinity and the following skill:"Prelate's Charge: Slam armament into the ground to create a surge of flames, then charge in. Hold to continue the charge."Usable on large and colossal axes and hammers.`
     */
    description: string;
    /**
     * The affinity associated with the ashes.
     * @type {string}
     * @example "Flame"
     */
    affinity: string;
    /**
     * The skill granted by the ashes.
     * @type {string}
     * @example "Prelate's Charge"
     */
    skill: string;
}
