import { describe, it, expect } from 'vitest'
import { createOrder } from './create-order'
import { InMemoryOrderRepository } from './test/in-memory-order-repository.js'
import { InMemoryMailService } from './test/in-memory-mail-service.js'

const orderRepository = new InMemoryOrderRepository()
const mailService = new InMemoryMailService()



it("should create a new order", async () => {
  const orderRequest = {
    customerId: 'customer-fake-id-1',
    amount: 1000
  }

  const order = await createOrder(
    orderRequest,
    orderRepository,
    mailService,
  )

  expect(order.id).toBeDefined()
  expect(order.customerId).toEqual(orderRequest.customerId)
  expect(order.amount).toEqual(orderRequest.amount)
  expect(orderRepository.orders.some(repositoryOrder => repositoryOrder.id === order.id)).toEqual(true)
})

it("should be mark orders with amount higher than 3000 as priority", async () => {
  const orderRequest = {
    customerId: 'customer-fake-id-2',
    amount: 4000
  }

  const order = await createOrder(
    orderRequest,
    orderRepository,
    mailService
  )

  expect(order.id).toBeDefined()
  expect(order.customerId).toEqual(orderRequest.customerId)
  expect(order.amount).toEqual(orderRequest.amount)
  expect(order.priority).toEqual(true)
})

it('should send email after the order is created', async () => {

  const orderRequest = {
    customerId: 'customer-fake-id-2',
    amount: 2000
  }

  const order = await createOrder(
    orderRequest,
    orderRepository,
    mailService
  )

  expect(mailService.calls).toEqual(orderRepository.orders.length)
})