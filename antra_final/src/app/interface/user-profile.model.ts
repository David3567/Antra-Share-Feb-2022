export class UserProfile {
    constructor(
        public name: string = "",
        public userName: string = "",
        public userEmail: string = "",
        public userRole: string = "",
        public bearerToken: string = ""
    ) { }
}
