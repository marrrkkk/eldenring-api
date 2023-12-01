"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spirit = void 0;
const base_1 = require("./base");
class Spirit extends base_1.Base {
    constructor() {
        super("spirits");
    }
    /**
   * Fetches information about a specific spirit summon.
   * @param name - The name of the spirit summon to fetch information for.
   * @returns A Promise that resolves to the spirit summon data.
   */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Spirit = Spirit;
