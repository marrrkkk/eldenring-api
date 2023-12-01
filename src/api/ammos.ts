import { AmmoData } from "../types/ammos.types";
import { Base } from "./base";

export class Ammo extends Base {
  public constructor() {
    super("ammos");
  }

  /**
   * Fetches information about a specific type of ammo.
   * @param name - The name of the ammo to fetch information for.
   * @returns A Promise that resolves to the ammo data.
   */

  public async get(name: string): Promise<AmmoData> {
    return this.fetch(name);
  }
}