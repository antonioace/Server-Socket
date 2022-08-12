import bodyParser from "body-parser";
import Server from "./classes/server";
import router from "./routes/routes";
import cors from 'cors'
const server = new Server();
//Rutas de servicios
server.app.use("/", router);
//BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//Cors
server.app.use(cors({origin:true,credentials:true}))
server.start(() => {
  console.log("Aplicacion inicidad en el puerto " + server.port);
});
