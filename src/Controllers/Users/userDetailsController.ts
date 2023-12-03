import { Request, Response} from 'express'
import { DetailUserService } from '../../Services/Users/userDetailsService'

class DetailUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id
        
        const detailuser = new DetailUserService()
        
        const user = await detailuser.execute(user_id)

        return res.json(user)

    }
}

export { DetailUserController }