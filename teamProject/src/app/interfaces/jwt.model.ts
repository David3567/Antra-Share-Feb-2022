export interface JwtUserModel{
    _id:string;
    userRole:string;
    userName:string;
    userEmail:string;
    iat:number;
    exp:number;
}