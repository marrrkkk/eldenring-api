"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const API_URL = "https://eldenring.fanapis.com/api/";
const request = async (endpoint, params = {}) => {
    try {
        const query = new URLSearchParams({
            ...params,
            format: "json",
        });
        const url = `${API_URL}${endpoint}?${query.toString()}`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Request failed with status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data: ", error);
    }
};
exports.request = request;
