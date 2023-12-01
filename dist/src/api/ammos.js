"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ammo = void 0;
const base_1 = require("./base");
class Ammo extends base_1.Base {
    constructor() {
        super("ammos");
    }
    /**
     * Fetches information about a specific type of ammo.
     * @param name - The name of the ammo to fetch information for.
     * @returns A Promise that resolves to the ammo data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Ammo = Ammo;
