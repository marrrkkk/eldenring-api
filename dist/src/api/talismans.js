"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Talisman = void 0;
const base_1 = require("./base");
class Talisman extends base_1.Base {
    constructor() {
        super("talismans");
    }
    /**
     * Fetches information about a specific talisman.
     * @param name - The name of the talisman to fetch information for.
     * @returns A Promise that resolves to the talisman data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Talisman = Talisman;
