import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router'
import Redis from 'ioredis';
import mongoose from 'mongoose';
import assert from "assert";

async main() => {

    const app = new Koa();

    const router = new Router();
    router.get('/', ctx => {
        ctx.body = `Nodejs koa demo project`;
    }).get('/api/get_data_from_redis', async (ctx) => {
        const key = ctx.query.key as string;
        ctx.body = {
            success: true,
            data: ctx.query.key,
        }
    }).get("/v1/ping",async (ctx)=>{
        ctx.body = {
            success: true,
            data: "success",
        }
    })

    app.use(bodyParser());
    app.use(router.routes());

    const PORT = 8000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}).catch ((error: string) => console.log("Init service  error: ", error));