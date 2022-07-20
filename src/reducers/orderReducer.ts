import Order from '../types/Order'

export interface Action {
    type: string
}

export interface CustomerNameAction extends Action {
    type: 'setCustomerName'
    customerName: string
}

export interface DateAction extends Action {
    type: 'setDate'
    date: Date
}

export interface ExtrasActions extends Action {
    type: 'setExtras'
    extras: string[]
}

export type Actions = CustomerNameAction | DateAction | ExtrasActions

export default function orderReducer(state: Order, action: CustomerNameAction | DateAction | ExtrasActions) {
    switch (action.type) {
        case 'setCustomerName':
            return {
                ...state,
                customerName: action.customerName
            }
        case 'setDate':
            return {
                ...state,
                date: action.date
            }
        case 'setExtras':
            return {
                ...state,
                extras: action.extras
            }
        default:
            throw new Error();
    }
}