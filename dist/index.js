"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const server_1 = __importDefault(require("./classes/server"));
const routes_1 = __importDefault(require("./routes/routes"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
//Rutas de servicios
server.app.use("/", routes_1.default);
//BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Cors
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
server.start(() => {
    console.log("Aplicacion inicidad en el puerto " + server.port);
});
