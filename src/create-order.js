export async function createOrder(data, orderRepository, mailService) {
  const { customerId, amount } = data
  const priority = amount > 3000

  const order = await orderRepository.create({ customerId, priority, amount })

  const amountFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)

  const mailBody = {
    from: "sender@server.com",
    to: "receiver@server.com",
    subject: "Order Confirmation",
    html: `<p>New Order (${order.id}): with amount of ${amountFormatted}</p>`,
  }

  await mailService.sendMail(mailBody)

  return order
}