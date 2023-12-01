"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const base_1 = require("./base");
class Weapon extends base_1.Base {
    constructor() {
        super("weapons");
    }
    /**
     * Fetches information about a specific weapon.
     * @param name - The name of the weapon to fetch information for.
     * @returns A Promise that resolves to the weapon data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Weapon = Weapon;
