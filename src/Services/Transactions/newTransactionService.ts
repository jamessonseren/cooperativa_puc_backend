import { TipoTransacoes } from "@prisma/client";
import prismaClient from "../../../prisma";

class NewTransactionService{
    async execute(id: string, novoSaldo: number, valorTransacao: number, descricao: TipoTransacoes ){

        const [transaction, updateAccount] = await prismaClient.$transaction([

            prismaClient.transacoes.create({
            
                data:{
                    user_id: id,
                    valor: valorTransacao,
                    descricao: descricao,
    
                }
                
            }),

            prismaClient.user.update({
                where:{
                    id
                },
                data:{
                    saldo: novoSaldo
                },
                select:{
                    id: true,
                    saldo: true,
                    name: true
                }
            })
        ])

        return {transaction, updateAccount}
        
    }
}

export { NewTransactionService }