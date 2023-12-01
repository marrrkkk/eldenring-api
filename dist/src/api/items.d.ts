import { ItemData } from "../types/items.types";
import { Base } from "./base";
export declare class Item extends Base {
    constructor();
    /**
     * Fetches information about a specific item.
     * @param name - The name of the item to fetch information for.
     * @returns A Promise that resolves to the item data.
     */
    get(name: string): Promise<ItemData>;
}
