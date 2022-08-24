import Router from '@koa/router'
import { registerUserApi } from '../api/user.api.js';

import { getAllUsersApi, updateUserApi } from '../api/user.api.js';

const userRouter=new Router({

    prefix:'/users'
});

userRouter.post("/",async (ctx)=>{

    const user=ctx.request.body
    ctx.body=await registerUserApi(user);
    ctx.set("Content-Type","application/json")
    ctx.status=201;
})

userRouter.get("/", async (ctx)=>{

    ctx.body=await getAllUsersApi();
    ctx.set("Content-Type", "application/json")

})

userRouter.put("/:id",async (ctx)=>{

    const id=ctx.params.id;
    const user=ctx.request.body;
    

    const updated=await updateUserApi(id, user);
    console.log(updated)

    ctx.body= updated

    ctx.set("Content-Type", "application/json")
    
})

export default userRouter;