export interface Users {
    "id": Number;
    "name": String;
    "username": String;
    "email": String;
    "address": {
        "street": String;
        "suite": String;
        "city": String;
        "zipcode": Number;
        "geo": {
            "lat": Number;
            "lng": Number;
        };
    };
    "phone": Number;
    "website": String;
    "company": {
        "name": String;
        "catchPhrase": String;
        "bs": String;
    }
}
