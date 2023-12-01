import { TalismanData } from "../types/talisman.types";
import { Base } from "./base";
export declare class Talisman extends Base {
    constructor();
    /**
     * Fetches information about a specific talisman.
     * @param name - The name of the talisman to fetch information for.
     * @returns A Promise that resolves to the talisman data.
     */
    get(name: string): Promise<TalismanData>;
}
