import { BossData } from "../types/bosses.types";
import { Base } from "./base";
export declare class Boss extends Base {
    constructor();
    /**
     * Fetches information about a specific boss in Elden Ring.
     * @param name - The name of the boss to fetch information for.
     * @returns A Promise that resolves to the boss data.
     */
    get(name: string): Promise<BossData>;
}
