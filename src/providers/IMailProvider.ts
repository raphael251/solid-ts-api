export interface IAddress {
    name: string
    email: string
}

export interface IMailMessage {
    from: IAddress
    to: IAddress
    subject: string
    body: string
}

export interface IMailProvider {
    sendMail(mail: IMailMessage): Promise<void>
}