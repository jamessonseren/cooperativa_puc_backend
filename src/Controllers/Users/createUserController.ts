import { Request, Response } from "express";
import { CreateUserService } from "../../Services/Users/createUserService";

class CreateUserController{
    async handle(req: Request, res: Response){

        const { name, email, cpf, password } = req.body

        const createUser = new CreateUserService()

        const user = await createUser.execute({
            name, email, cpf, password
        })

        return res.json(user)
    }
}

export { CreateUserController }