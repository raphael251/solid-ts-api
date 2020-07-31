import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
        ) {}
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) throw new Error('User already exists')

        const user = new User(data)

        await this.usersRepository.save(user)

        this.mailProvider.sendMail({
            from: {
                name: 'Empresa XYZ',
                email: 'empresa@xyz.com'
            },
            to: {
                name: data.name,
                email: data.email
            },
            subject: 'Seja bem-vindo!',
            body: 'Olá! Seja muito bem-vindo e aproveite nossos recursos!'
        })
    }
}