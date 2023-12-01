"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ashes = void 0;
const base_1 = require("./base");
class Ashes extends base_1.Base {
    constructor() {
        super("ashes");
    }
    /**
     * Fetches information about a specific type of spirit ashes.
     * @param name - The name of the spirit ashes to fetch information for.
     * @returns A Promise that resolves to the spirit ashes data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Ashes = Ashes;
