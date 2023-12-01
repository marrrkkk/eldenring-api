import { WeaponData } from "../types/weapons.types";
import { Base } from "./base";

export class Weapon extends Base {
  public constructor() {
    super("weapons");
  }

  /**
   * Fetches information about a specific weapon.
   * @param name - The name of the weapon to fetch information for.
   * @returns A Promise that resolves to the weapon data.
   */

  public async get(name: string): Promise<WeaponData> {
    return this.fetch(name);
  }
}