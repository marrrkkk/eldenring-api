import { TalismanData } from "../types/talisman.types";
import { Base } from "./base";

export class Talisman extends Base {
  public constructor() {
    super("talismans");
  }

  /**
   * Fetches information about a specific talisman.
   * @param name - The name of the talisman to fetch information for.
   * @returns A Promise that resolves to the talisman data.
   */

  public async get(name: string): Promise<TalismanData> {
    return this.fetch(name);
  }
}