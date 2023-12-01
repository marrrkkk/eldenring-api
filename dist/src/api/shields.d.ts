import { ShieldData } from "../types/shields.types";
import { Base } from "./base";
export declare class Shield extends Base {
    constructor();
    /**
     * Fetches information about a specific shield.
     * @param name - The name of the shield to fetch information for.
     * @returns A Promise that resolves to the shield data.
     */
    get(name: string): Promise<ShieldData>;
}
