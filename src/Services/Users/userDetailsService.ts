import prismaClient from "../../../prisma";

class DetailUserService{
    async execute(user_id: string){

        const user = await prismaClient.user.findUnique({
            where:{
                id: user_id
            },
            select:{
                id: true,
                cpf: true,
                name: true,
                email: true,
                saldo: true
            }
        })
        return user
    }
}

export { DetailUserService }