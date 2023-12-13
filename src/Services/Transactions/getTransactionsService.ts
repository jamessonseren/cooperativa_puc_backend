import prismaClient from "../../../prisma";

export class GetTransactionService{
    async execute(id: string){
        const transactions = await prismaClient.transacoes.findMany({
            where:{
                user_id: id
            },
            orderBy:{
                created_at: 'desc'
            }
        })

        return transactions
    }
}