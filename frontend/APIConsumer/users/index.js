"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tranport_Layer_1 = require("../Tranport Layer");
const endPoints_1 = require("./endPoints");
class Users {
    route = '/user';
    async login(userData) {
        return (0, Tranport_Layer_1.request)({ endPoint: endPoints_1.UserEndPoints.login, route: this.route, method: 'POST', body: userData, headers: null });
    }
    async register(userData) {
        return (0, Tranport_Layer_1.request)({ endPoint: endPoints_1.UserEndPoints.register, route: this.route, method: 'POST', body: userData, headers: null });
    }
}
exports.default = Users;
