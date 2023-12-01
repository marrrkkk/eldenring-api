import { request } from "../utils/request";

export class Base {
  private endpoint;

  public constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  protected async fetch(name: string): Promise<any> {
    try {
      const data = await request(this.endpoint, { name: name });
      return await data.data[0];
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
}