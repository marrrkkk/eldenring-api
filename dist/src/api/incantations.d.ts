import { IncantationData } from "../types/incantations.types";
import { Base } from "./base";
export declare class Incantation extends Base {
    constructor();
    /**
     * Fetches information about a specific incantation.
     * @param name - The name of the incantation to fetch information for.
     * @returns A Promise that resolves to the incantation data.
     */
    get(name: string): Promise<IncantationData>;
}
