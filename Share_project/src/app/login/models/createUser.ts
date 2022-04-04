export interface CreateUser {
    name?: string;
    userName: string;
    userEmail: string;
    password: string;
    userRole: string;
    age?: number;
    gender?: string;
    phone?: number;
}