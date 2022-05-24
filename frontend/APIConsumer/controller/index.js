"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../users"));
const courses_1 = __importDefault(require("../courses"));
const types_1 = require("../Tranport Layer/types");
class ReachAPI {
    m_users;
    m_courses;
    constructor(baseURL = process.env.baseURL ? process.env.baseURL : 'http://localhost:5000/api') {
        process.env.baseURL = baseURL;
        this.m_users = new users_1.default();
        this.m_courses = new courses_1.default();
    }
    courses(transportParams = types_1.defaultTransportParams) {
        this.m_courses.setTransportParams(transportParams);
        return this.m_courses;
    }
    users() {
        return this.m_users;
    }
}
exports.default = ReachAPI;
