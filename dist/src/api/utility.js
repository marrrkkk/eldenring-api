"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
const request_1 = require("../utils/request");
class Utility {
    /**
     * Searches for items based on the provided parameters.
     *
     * @param {endpoints} endpoint - The endpoint to be used for the search.
     * @param {string} name - The name of the item to search for.
     * @param {number} limit - The maximum number of results to retrieve.
     * @returns {Promise<any>} A promise that resolves to the search results.
     */
    async search(endpoint, name, limit) {
        try {
            const res = await (0, request_1.request)(endpoint, { name: name, limit: limit });
            return res;
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Retrieves all items from the specified endpoint.
     *
     * @param {endpoints} endpoint - The endpoint to retrieve all items from.
     * @returns {Promise<any>} A promise that resolves to the object of all items.
     */
    async getAll(endpoint) {
        try {
            const total = await (0, request_1.request)(endpoint);
            return await (0, request_1.request)(endpoint, { limit: total.total });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.Utility = Utility;
