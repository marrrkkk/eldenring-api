import { AshesData } from "../types/ashes.types";
import { Base } from "./base";

export class Ashes extends Base {
  public constructor() {
    super("ashes");
  }

  /**
   * Fetches information about a specific type of spirit ashes.
   * @param name - The name of the spirit ashes to fetch information for.
   * @returns A Promise that resolves to the spirit ashes data.
   */

  public async get(name: string): Promise<AshesData> {
    return this.fetch(name);
  }
}