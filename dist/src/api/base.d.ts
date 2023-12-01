export declare class Base {
    private endpoint;
    constructor(endpoint: string);
    protected fetch(name: string): Promise<any>;
}
