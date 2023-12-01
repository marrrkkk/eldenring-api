import { NpcData } from "../types/npc.types";
import { Base } from "./base";
export declare class NPC extends Base {
    constructor();
    /**
     * Fetches information about a specific non-player character (NPC).
     * @param name - The name of the NPC to fetch information for.
     * @returns A Promise that resolves to the NPC data.
     */
    get(name: string): Promise<NpcData>;
}
