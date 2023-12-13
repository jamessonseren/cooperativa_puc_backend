import prismaClient from "../../../prisma"
import { hash } from "bcryptjs"

interface UserRequest{
    name: string
    cpf: string
    email: string
    password: string
}

class CreateUserService{
    async execute(data: UserRequest){
        //Check if admin inserted email
        if(!data.email || !data.password){
            throw new Error("Missing information")
        }

        //Check if email is already registered
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: data.email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(data.password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: data.name,
                cpf: data.cpf,
                email: data.email,
                password: passwordHash
            },
            select:{
                id: true,
                cpf: true,
                name: true,
                email: true
            }
        })

        return user
    }
    }


export { CreateUserService }