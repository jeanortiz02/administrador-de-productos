import express from "express";
import  swaggerUi  from "swagger-ui-express";
import router from "./router";
import db from "./config/db";
import colors from "colors";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";

// Conection to DB 
export async function connectDB() {

    try {
        await db.authenticate();
        await db.sync()
        // console.log( colors.bgBlue.bold('Conectado a la base de datos'))
    } catch (error) {
        console.log(error);
        console.log( colors.bgRed.white( 'Hubo un error a conectar a la base de datos'))
    }
}

connectDB();

// Instancia de express 
const server = express();

// Leer datos de formularios
server.use(express.json());

server.use( '/api/products', router);


// Docs 
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server;