import { CreatureData } from "../types/creatures.types";
import { Base } from "./base";

export class Creature extends Base {
  public constructor() {
    super("creatures");
  }

  /**
   * Fetches information about a specific creature.
   * @param name - The name of the creature to fetch information for.
   * @returns A Promise that resolves to the creature data.
   */

  public async get(name: string): Promise<CreatureData> {
    return this.fetch(name);
  }
}