"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Armor = void 0;
const base_1 = require("./base");
class Armor extends base_1.Base {
    constructor() {
        super("armors");
    }
    /**
     * Fetches information about a specific armor.
     * @param name - The name of the armor to fetch information for.
     * @returns A Promise that resolves to the armor data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Armor = Armor;
