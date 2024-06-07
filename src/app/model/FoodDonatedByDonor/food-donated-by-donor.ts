import { FoodDonation } from "../FoodDonation/food-donation";
import { Users } from "../User/users";


export class FoodDonatedByDonor {
    id: number=0.0;
    donationdate: Date = new Date();
    quantityFood: number=0.0;
    users: Users;
    foodDonation: FoodDonation;
}