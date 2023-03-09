import 'dotenv/config'
import { randomUUID } from 'node:crypto'
import http from 'node:http'
import { createOrder } from './create-order.js'
import { OrderRepository } from './repositories/order-repository.js'
import { MailService } from './services/mail-service.js'


const server = http.createServer(async (req, res) => {

  if (req.method === 'POST' && req.url === '/orders') {

    const orderRepository = new OrderRepository()
    const mailService = new MailService()

    const order = await createOrder({
      customerId: randomUUID(),
      amount: Math.round(Math.random() * 5000)
    }, orderRepository, mailService)

    return res
      .writeHead(201, { 'Content-Type': 'application/json' })
      .end(JSON.stringify({ order }))
  }

  return res.writeHead(404).end()

})

server.listen(3333, () => {
  console.log('HTTP server running!')
})