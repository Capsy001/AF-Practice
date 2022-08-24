import Koa from "koa"
import bodyParser from 'koa-bodyparser'
import cors from "@koa/cors"
import userRouter from "./routes/user.router.js";

const app=new Koa();

app.use(bodyParser());
app.use(cors())

app.use(userRouter.routes()).use(userRouter.allowedMethods());

app.listen(3000);

app.use(ctx=>{
    ctx.body="<h1>Hello! World!</h1>";
})

console.log("App is running on port 3000!")
