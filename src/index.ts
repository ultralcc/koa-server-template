import * as Koa from "koa"
import * as logger from "koa-logger"
import * as bodyParser from 'koa-bodyparser'
import * as koaValidator from 'koa-async-validator'
import * as cors from '@koa/cors'
import Config from './config/config'
import router from "./routes"

const app = new Koa()

// Middlewares
let globalMiddlewares = [
    logger(), 
    cors(),
    bodyParser(),
    koaValidator(),
    router()
]

globalMiddlewares.forEach(middleware => app.use(middleware))

// Start server.
app.listen(Config.server.port);
console.log("\x1b[33m", "Server run on port " + Config.server.port + "...")