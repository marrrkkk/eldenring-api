import { ArmorData } from "../types/armors.types";
import { Base } from "./base";

export class Armor extends Base {
  public constructor() {
    super("armors");
  }

  /**
   * Fetches information about a specific armor.
   * @param name - The name of the armor to fetch information for.
   * @returns A Promise that resolves to the armor data.
   */

  public async get(name: string): Promise<ArmorData> {
    return this.fetch(name);
  }
}