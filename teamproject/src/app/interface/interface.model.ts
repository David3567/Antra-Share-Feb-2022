export interface Story {
    "_id": Number,
    "publisherName": String,
    "publishedTime": Date,
    "content": {
        "image": String,
        "video": String,
        "text": String,
        "_id": Number
    }
    "likedIdList": any[];
    "__v": Number
}

export interface comment {
    "publisherName": String,
    "publishedTime": Date,
    "content": {
        "image": String,
        "video": String,
        "text": String,
        "_id": Number
    },
    "_id": Number

}