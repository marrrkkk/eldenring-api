import { SorceryData } from "../types/sorceries.types";
import { Base } from "./base";

export class Sorcery extends Base {
  public constructor() {
    super("sorceries");
  }

  /**
   * Fetches information about a specific sorcery.
   * @param name - The name of the sorcery to fetch information for.
   * @returns A Promise that resolves to the sorcery data.
   */

  public async get(name: string): Promise<SorceryData> {
    return this.fetch(name);
  }
}