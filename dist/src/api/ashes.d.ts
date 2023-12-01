import { AshesData } from "../types/ashes.types";
import { Base } from "./base";
export declare class Ashes extends Base {
    constructor();
    /**
     * Fetches information about a specific type of spirit ashes.
     * @param name - The name of the spirit ashes to fetch information for.
     * @returns A Promise that resolves to the spirit ashes data.
     */
    get(name: string): Promise<AshesData>;
}
