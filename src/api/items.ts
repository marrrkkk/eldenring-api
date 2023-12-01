import { ItemData } from "../types/items.types";
import { Base } from "./base";

export class Item extends Base {
  public constructor() {
    super("items");
  }

  /**
   * Fetches information about a specific item.
   * @param name - The name of the item to fetch information for.
   * @returns A Promise that resolves to the item data.
   */

  public async get(name: string): Promise<ItemData> {
    return this.fetch(name);
  }
}