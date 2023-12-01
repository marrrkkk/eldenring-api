import { CreatureData } from "../types/creatures.types";
import { Base } from "./base";
export declare class Creature extends Base {
    constructor();
    /**
     * Fetches information about a specific creature.
     * @param name - The name of the creature to fetch information for.
     * @returns A Promise that resolves to the creature data.
     */
    get(name: string): Promise<CreatureData>;
}
