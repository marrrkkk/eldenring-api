"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = void 0;
const base_1 = require("./base");
class Class extends base_1.Base {
    constructor() {
        super("class");
    }
    /**
     * Fetches information about a specific character class.
     * @param name - The name of the character class to fetch information for.
     * @returns A Promise that resolves to the character class data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Class = Class;
