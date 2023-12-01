"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const base_1 = require("./base");
class Item extends base_1.Base {
    constructor() {
        super("items");
    }
    /**
     * Fetches information about a specific item.
     * @param name - The name of the item to fetch information for.
     * @returns A Promise that resolves to the item data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Item = Item;
