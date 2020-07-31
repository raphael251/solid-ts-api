import { IMailProvider, IMailMessage } from "../IMailProvider";

export class MailTrapMailProvider implements IMailProvider {
    public async sendMail(mail: IMailMessage): Promise<void> {
        console.log(
            'email sendo enviado com os seguintes dados:', 
            JSON.stringify(mail, null, 2)
        )
    }
}