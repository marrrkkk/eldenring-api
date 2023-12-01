/**
 * Represents common properties shared across multiple data types.
 * @interface
 */
export interface common {
    /** The name of the item. */
    name: string;
    /** The amount or quantity. */
    amount: number;
}
/**
 * Represents statistics properties for a character in Elden Ring.
 * @interface
 */
export interface stats {
    /**
     * The level of the character.
     * @type {string}
     * @example "9"
     */
    level: string;
    /**
     * The vigor stat of the character.
     * @type {string}
     * @example "15"
     */
    vigor: string;
    /**
     * The mind stat of the character.
     * @type {string}
     * @example "10"
     */
    mind: string;
    /**
     * The endurance stat of the character.
     * @type {string}
     * @example "11"
     */
    endurance: string;
    /**
     * The strength stat of the character.
     * @type {string}
     * @example "14"
     */
    strength: string;
    /**
     * The dexterity stat of the character.
     * @type {string}
     * @example "13"
     */
    dexterity: string;
    /**
     * The intelligence stat of the character.
     * @type {string}
     * @example "9"
     */
    intelligence: string;
    /**
     * The faith stat of the character.
     * @type {string}
     * @example "9"
     */
    faith: string;
    /**
     * The arcane stat of the character.
     * @type {string}
     * @example "7"
     */
    arcane: string;
}
/**
 * Represents scaling properties for a weapon or shield in Elden Ring.
 * @interface
 */
export interface scale {
    /**
     * The name of the scaling attribute.
     * @type {string}
     * @example "Strength"
     */
    name: string;
    /**
     * The scaling value associated with the attribute.
     * @type {string}
     * @example "A"
     */
    scaling: string;
}
