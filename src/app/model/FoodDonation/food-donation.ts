import { Typeofood } from "../TypeOfFood/typeofood";


export class FoodDonation {
    id: number; //id food donation
    food_name: string; //food name
    specific_description: string; //specific description of the food donated
    broadcast_date: Date; //broadcast date of the food donated
    expiration_date: Date; //expiration date of the food donated
    typeOfFood: Typeofood;
}