import { TypeOfFood } from "../TypeOfFood/type-of-food"

export class FoodDonation {
    id: number
    food_name: string
    specific_description: string
    broadcast_date: Date = new Date(Date.now())
    expiration_date: Date = new Date(Date.now())
    typeOfFood: TypeOfFood
}
