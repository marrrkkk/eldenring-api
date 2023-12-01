import { IncantationData } from "../types/incantations.types";
import { Base } from "./base";

export class Incantation extends Base {
  public constructor() {
    super("incantations");
  }

  /**
   * Fetches information about a specific incantation.
   * @param name - The name of the incantation to fetch information for.
   * @returns A Promise that resolves to the incantation data.
   */

  public async get(name: string): Promise<IncantationData> {
    return this.fetch(name);
  }
}