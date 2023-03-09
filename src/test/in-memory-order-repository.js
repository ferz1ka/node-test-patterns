import { randomUUID } from 'node:crypto'

export class InMemoryOrderRepository {

  orders = []

  async create(data) {
    const { customerId, priority, amount } = data

    const order = {
      id: 'fake-order-id',
      customerId,
      priority,
      amount
    }

    this.orders.push(order)

    return order
  }
}