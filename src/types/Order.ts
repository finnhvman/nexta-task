type Order = {
    customerName: string
    date: Date
    extras: string[]
}

export type PartialOrder = Partial<Order>

export default Order
