import { ClassData } from "../types/classes.types";
import { Base } from "./base";

export class Class extends Base {
  public constructor() {
    super("class");
  }

  /**
   * Fetches information about a specific character class.
   * @param name - The name of the character class to fetch information for.
   * @returns A Promise that resolves to the character class data.
   */

  public async get(name: string): Promise<ClassData> {
    return this.fetch(name);
  }
}