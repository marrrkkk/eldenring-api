"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incantation = void 0;
const base_1 = require("./base");
class Incantation extends base_1.Base {
    constructor() {
        super("incantations");
    }
    /**
     * Fetches information about a specific incantation.
     * @param name - The name of the incantation to fetch information for.
     * @returns A Promise that resolves to the incantation data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Incantation = Incantation;
