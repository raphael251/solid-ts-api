import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailTrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }