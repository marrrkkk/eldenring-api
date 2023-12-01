import { SpiritData } from "../types/spirits.types";
import { Base } from "./base";

export class Spirit extends Base {
  public constructor() {
    super("spirits");
  }

    /**
   * Fetches information about a specific spirit summon.
   * @param name - The name of the spirit summon to fetch information for.
   * @returns A Promise that resolves to the spirit summon data.
   */

  public async get(name: string): Promise<SpiritData> {
    return this.fetch(name);
  }
}