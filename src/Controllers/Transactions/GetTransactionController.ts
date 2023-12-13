import { Request, Response } from "express";
import { GetTransactionService } from "../../Services/Transactions/getTransactionsService";

export class GetTransactionController{
    async handle(req: Request, res: Response){

        const userId = req.user_id

        const getTransactionService = new GetTransactionService()

        const result = await getTransactionService.execute(userId)

        console.log({result})
        return res.json(result)
    }
}