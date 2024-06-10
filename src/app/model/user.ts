//import {Role, NameRole} from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    enabled: boolean = true;
    //role: Role;

    //constructor() {
    //  this.role = new Role();
    //  this.role.nameRole = NameRole.DONANTE; // Aquí asignas el rol que deseas
    //}
}