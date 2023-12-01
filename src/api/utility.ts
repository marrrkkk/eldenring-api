import { endpoints } from "../types/utility.types";
import { request } from "../utils/request";

export class Utility {
  /**
   * Searches for items based on the provided parameters.
   *
   * @param {endpoints} endpoint - The endpoint to be used for the search.
   * @param {string} name - The name of the item to search for.
   * @param {number} limit - The maximum number of results to retrieve.
   * @returns {Promise<any>} A promise that resolves to the search results.
   */
  public async search(
    endpoint: endpoints,
    name: string,
    limit: number
  ): Promise<any> {
    try {
      const res = await request(endpoint, { name: name, limit: limit });
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Retrieves all items from the specified endpoint.
   *
   * @param {endpoints} endpoint - The endpoint to retrieve all items from.
   * @returns {Promise<any>} A promise that resolves to the object of all items.
   */
  public async getAll(endpoint: endpoints): Promise<any> {
    try {
      const total = await request(endpoint);
      return await request(endpoint, { limit: total.total });
    } catch (error) {
      console.log(error);
    }
  }
}