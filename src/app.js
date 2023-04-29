import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose";
import { resolve } from 'path';
import pmRouter from "./routes/ProductManagerRouter.js"
import cartRouter from "./routes/CartRouter.js"

import { engine } from 'express-handlebars';
import RealTimeProducts from "./routes/RealTimeProductsRouter.js"

/* import { Server } from "socket.io" */

void (async () => {
    try {

        const SERVER_PORT = 8081;

        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        const app = express();

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.static(resolve('src/public')));

         /*const viewsPath = resolve('src/views');
        app.engine('handlebars', engine({
            layoutsDir: `${viewsPath}/layouts`,
            defaultLayout: `${viewsPath}/layouts/main.handlebars`,
        }));
        app.set('view engine', 'handlebars');
        app.set('views', viewsPath);

                const socketServer = new Server(httpServer)
        
                socketServer.on("connection", socket => {
                    console.log("Nuevo cliente conectado")
        
                    socket.on("message", (data) => {
                        console.log(data)
                    })
        
                    socket.on("newProduct", (p) => {
                        socketServer.emit("newProduct", p)
                    })
                }) */

        app.use('/api/products', pmRouter);
        app.use('/api/carts', cartRouter);
/*         app.use('/', RealTimeProducts); */

        app.listen(SERVER_PORT, () => {
            console.log(`Conectado al server en el puerto: ${SERVER_PORT}`);
        });

    }
    catch (e) {
        console.log(e)
    }
})()

