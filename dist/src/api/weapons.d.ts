import { WeaponData } from "../types/weapons.types";
import { Base } from "./base";
export declare class Weapon extends Base {
    constructor();
    /**
     * Fetches information about a specific weapon.
     * @param name - The name of the weapon to fetch information for.
     * @returns A Promise that resolves to the weapon data.
     */
    get(name: string): Promise<WeaponData>;
}
