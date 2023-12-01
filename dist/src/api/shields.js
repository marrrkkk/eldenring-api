"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shield = void 0;
const base_1 = require("./base");
class Shield extends base_1.Base {
    constructor() {
        super("shields");
    }
    /**
     * Fetches information about a specific shield.
     * @param name - The name of the shield to fetch information for.
     * @returns A Promise that resolves to the shield data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Shield = Shield;
