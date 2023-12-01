"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const base_1 = require("./base");
class Location extends base_1.Base {
    constructor() {
        super("locations");
    }
    /**
     * Fetches information about a specific location.
     * @param name - The name of the location to fetch information for.
     * @returns A Promise that resolves to the location data.
     */
    async get(name) {
        return this.fetch(name);
    }
}
exports.Location = Location;
