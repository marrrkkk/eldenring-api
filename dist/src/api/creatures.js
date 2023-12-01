"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creature = void 0;
const base_1 = require("./base");
class Creature extends base_1.Base {
    constructor() {
        super("creatures");
    }
    /**
     * Fetches information about a specific creature.
     * @param name - The name of the creature to fetch information for.
     * @returns A Promise that resolves to the creature data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Creature = Creature;
