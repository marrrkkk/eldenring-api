import { ArmorData } from "../types/armors.types";
import { Base } from "./base";
export declare class Armor extends Base {
    constructor();
    /**
     * Fetches information about a specific armor.
     * @param name - The name of the armor to fetch information for.
     * @returns A Promise that resolves to the armor data.
     */
    get(name: string): Promise<ArmorData>;
}
