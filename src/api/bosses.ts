import { BossData } from "../types/bosses.types";
import { Base } from "./base";

export class Boss extends Base {
  public constructor() {
    super("bosses");
  }

  /**
   * Fetches information about a specific boss in Elden Ring.
   * @param name - The name of the boss to fetch information for.
   * @returns A Promise that resolves to the boss data.
   */

  public async get(name: string): Promise<BossData> {
    return this.fetch(name);
  }
}