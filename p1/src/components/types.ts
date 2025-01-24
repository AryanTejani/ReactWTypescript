export type User = {
    id:number,
    name:string,
    email:string
}

export type Admin = User & {
    isAdmin:string,
    lastLogin:Date
}