import { ShieldData } from "../types/shields.types";
import { Base } from "./base";

export class Shield extends Base {
  public constructor() {
    super("shields");
  }

  /**
   * Fetches information about a specific shield.
   * @param name - The name of the shield to fetch information for.
   * @returns A Promise that resolves to the shield data.
   */

  public async get(name: string): Promise<ShieldData> {
    return this.fetch(name);
  }
}