"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../environment/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = http_1.default.createServer(this.app);
        this.io = new socket_io_1.default.Server(this.httpServer, {
            cors: { origin: true, credentials: true },
        });
        this.escucharSockets();
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
    escucharSockets() {
        console.log("Escuchando conexiones-sockets");
        this.io.on("connection", (cliente) => {
            console.log("Nuevo cliente conectado");
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
}
exports.default = Server;
