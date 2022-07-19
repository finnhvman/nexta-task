type Order = {
    customerName: string
    date: Date | null
    extras: string[]
}

export type PartialOrder = Partial<Order>

export default Order
