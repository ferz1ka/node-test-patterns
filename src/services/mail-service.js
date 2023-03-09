import { transport } from '../mail/transport.js'

export class MailService {
  async sendMail(mailBody) {
    const { from, to, subject, html } = mailBody
    await transport.sendMail({ from, to, subject, html })
  }
}