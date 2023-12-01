import { LocationData } from "../types/locations.types";
import { Base } from "./base";

export class Location extends Base {
  public constructor() {
    super("locations");
  }

  /**
   * Fetches information about a specific location.
   * @param name - The name of the location to fetch information for.
   * @returns A Promise that resolves to the location data.
   */

  public async get(name: string): Promise<LocationData> {
    return this.fetch(name);
  }
}