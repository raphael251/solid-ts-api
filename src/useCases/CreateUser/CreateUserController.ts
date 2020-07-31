import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor (private createUserUseCase: CreateUserUseCase) {}
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, name, password } = req.body
        try {
            await this.createUserUseCase.execute({ email, name, password })
            return res.status(201).send()
        } catch (error) {
            return res.status(201).json({ message: error.message })
        }
    }
}