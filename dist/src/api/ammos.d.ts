import { AmmoData } from "../types/ammos.types";
import { Base } from "./base";
export declare class Ammo extends Base {
    constructor();
    /**
     * Fetches information about a specific type of ammo.
     * @param name - The name of the ammo to fetch information for.
     * @returns A Promise that resolves to the ammo data.
     */
    get(name: string): Promise<AmmoData>;
}
