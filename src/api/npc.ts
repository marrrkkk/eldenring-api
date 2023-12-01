import { NpcData } from "../types/npc.types";
import { Base } from "./base";

export class NPC extends Base {
  public constructor() {
    super("npcs");
  }

  /**
   * Fetches information about a specific non-player character (NPC).
   * @param name - The name of the NPC to fetch information for.
   * @returns A Promise that resolves to the NPC data.
   */

  public async get(name: string): Promise<NpcData> {
    return this.fetch(name);
  }
}