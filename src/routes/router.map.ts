
import { Router } from "express";
import serverError from "../interfaces/serverErrorInterface.js";
import { Request,Response,NextFunction } from "express";
//import root routes
import signUpRouter from "./signup.js";


const rootRouter = Router();


rootRouter.use(signUpRouter);









//handling 404 error

rootRouter.use(

    (req:Request,res:Response,next:NextFunction)=>{
        next(
            
            
            new serverError(undefined,404,"NOT_FOUND","not found page")
            
            )
    }



)

//export routers
export default rootRouter ;