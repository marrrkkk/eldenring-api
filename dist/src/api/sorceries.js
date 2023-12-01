"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorcery = void 0;
const base_1 = require("./base");
class Sorcery extends base_1.Base {
    constructor() {
        super("sorceries");
    }
    /**
     * Fetches information about a specific sorcery.
     * @param name - The name of the sorcery to fetch information for.
     * @returns A Promise that resolves to the sorcery data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Sorcery = Sorcery;
