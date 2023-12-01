"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = void 0;
const base_1 = require("./base");
class Boss extends base_1.Base {
    constructor() {
        super("bosses");
    }
    /**
     * Fetches information about a specific boss in Elden Ring.
     * @param name - The name of the boss to fetch information for.
     * @returns A Promise that resolves to the boss data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Boss = Boss;
