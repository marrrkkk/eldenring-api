import { LocationData } from "../types/locations.types";
import { Base } from "./base";
export declare class Location extends Base {
    constructor();
    /**
     * Fetches information about a specific location.
     * @param name - The name of the location to fetch information for.
     * @returns A Promise that resolves to the location data.
     */
    get(name: string): Promise<LocationData>;
}
