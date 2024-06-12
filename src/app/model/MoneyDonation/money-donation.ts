import { PaymentMethod } from "../PaymentMethod/payment-method"

export class MoneyDonation {
    id: number
    total_amount: number
    payment_date: Date = new Date(Date.now())
    paymentMethod: PaymentMethod
}
