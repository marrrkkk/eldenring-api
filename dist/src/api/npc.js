"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NPC = void 0;
const base_1 = require("./base");
class NPC extends base_1.Base {
    constructor() {
        super("npcs");
    }
    /**
     * Fetches information about a specific non-player character (NPC).
     * @param name - The name of the NPC to fetch information for.
     * @returns A Promise that resolves to the NPC data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.NPC = NPC;
