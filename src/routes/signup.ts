import { Router } from "express";

const signUpRouter = Router()

signUpRouter.get('/signup',(req,res,next)=>{


    res.json({page:"signup"})
})

export default signUpRouter;