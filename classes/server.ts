import express from "express";
import { SERVER_PORT } from "../environment/environment";
import socketIO from "socket.io";
import http from "http";
export default class Server {
  private static _instance: Server;
  public app: express.Application;

  public port: number;

  public io: socketIO.Server;
  private httpServer: any;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.httpServer = http.createServer(this.app);
    this.io = new socketIO.Server(this.httpServer, {
      cors: { origin: true, credentials: true },
    });

    this.escucharSockets();
  }

  start(callback: any) {
    this.httpServer.listen(this.port, callback);
  }

  private escucharSockets() {
    console.log("Escuchando conexiones-sockets");

    this.io.on("connection", (cliente) => {
      console.log("Nuevo cliente conectado");
    });
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }
}
