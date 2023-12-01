import { endpoints } from "../types/utility.types";
export declare class Utility {
    /**
     * Searches for items based on the provided parameters.
     *
     * @param {endpoints} endpoint - The endpoint to be used for the search.
     * @param {string} name - The name of the item to search for.
     * @param {number} limit - The maximum number of results to retrieve.
     * @returns {Promise<any>} A promise that resolves to the search results.
     */
    search(endpoint: endpoints, name: string, limit: number): Promise<any>;
    /**
     * Retrieves all items from the specified endpoint.
     *
     * @param {endpoints} endpoint - The endpoint to retrieve all items from.
     * @returns {Promise<any>} A promise that resolves to the object of all items.
     */
    getAll(endpoint: endpoints): Promise<any>;
}
