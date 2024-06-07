import { Roles } from "../Role/roles";

export class Users {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    enabled: boolean;
    roles: Roles;
}