import { ClassData } from "../types/classes.types";
import { Base } from "./base";
export declare class Class extends Base {
    constructor();
    /**
     * Fetches information about a specific character class.
     * @param name - The name of the character class to fetch information for.
     * @returns A Promise that resolves to the character class data.
     */
    get(name: string): Promise<ClassData>;
}
