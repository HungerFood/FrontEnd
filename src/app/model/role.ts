export enum NameRole {
    ADMIN = 'ADMIN',
    DONANTE = 'DONANTE'
}

export class Role {
    id: number;
    nameRole: NameRole;
}