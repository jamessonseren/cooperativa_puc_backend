import { Router, Request, Response } from "express";
import { CreateUserController } from "./Controllers/Users/createUserController";
import { AuthUserController } from "./Controllers/Users/loginUserController";
import { newTransactionController } from "./Controllers/Transactions/newTransactionController";
import { isAuthenticated } from "./middlewares/isAuth";
import { DetailUserController } from "./Controllers/Users/userDetailsController";
import { GetTransactionController } from "./Controllers/Transactions/GetTransactionController";

const router = Router()

router.get('/', (req: Request, res: Response)=>{
    res.send("Application running successfully")
})

//Users

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle )
router.get('/me', isAuthenticated, new DetailUserController().handle )

//transaction
router.post('/transaction', isAuthenticated, new newTransactionController().handle )
router.get('/transaction', isAuthenticated, new GetTransactionController().handle )

export {router}