import { Request, Response } from "express";
import { NewTransactionService } from "../../Services/Transactions/newTransactionService";

class newTransactionController{
    async handle(req: Request, res: Response){

       const userId = req.user_id

       const newValue = req.body.newValue as number

       const descricao = req.body.description

       const valorTransacao = req.body.transactionValue

       const transactionService = new NewTransactionService()

       const result = await transactionService.execute(userId, newValue, valorTransacao, descricao)

       return res.json(result)
    }
}
export { newTransactionController }