
export class InMemoryMailService {
  calls = 0

  async sendMail(mailBody) {
    const { from, to, subject, html } = mailBody
    return ++this.calls
  }
}