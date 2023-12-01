import { SpiritData } from "../types/spirits.types";
import { Base } from "./base";
export declare class Spirit extends Base {
    constructor();
    /**
   * Fetches information about a specific spirit summon.
   * @param name - The name of the spirit summon to fetch information for.
   * @returns A Promise that resolves to the spirit summon data.
   */
    get(name: string): Promise<SpiritData>;
}
