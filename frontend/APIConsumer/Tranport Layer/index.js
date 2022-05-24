"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const request = async (payload) => {
    if (payload.method === 'POST' || payload.method === 'post') {
        const response = await (0, node_fetch_1.default)(process.env.baseURL + payload.route + payload.endPoint, {
            method: payload.method,
            headers: {
                "content-type": "application/json",
                ...payload.headers
            },
            body: JSON.stringify(payload.body)
        });
        return response.json();
    }
    else if (payload.method === 'GET' || payload.method === 'get') {
        const response = await (0, node_fetch_1.default)(process.env.baseURL + payload.route + payload.endPoint, {
            method: payload.method,
            headers: {
                'content-type': 'application/json',
                ...payload.headers
            }
        });
        return response.json();
    }
};
exports.request = request;
