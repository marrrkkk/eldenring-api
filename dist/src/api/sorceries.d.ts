import { SorceryData } from "../types/sorceries.types";
import { Base } from "./base";
export declare class Sorcery extends Base {
    constructor();
    /**
     * Fetches information about a specific sorcery.
     * @param name - The name of the sorcery to fetch information for.
     * @returns A Promise that resolves to the sorcery data.
     */
    get(name: string): Promise<SorceryData>;
}
