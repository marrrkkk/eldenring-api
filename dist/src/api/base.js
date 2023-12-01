"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const request_1 = require("../utils/request");
class Base {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    async fetch(name) {
        try {
            const data = await (0, request_1.request)(this.endpoint, { name: name });
            return await data.data[0];
        }
        catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
}
exports.Base = Base;
