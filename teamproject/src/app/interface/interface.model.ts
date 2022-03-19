export interface Story {
    "_id": String,
    "publisherName": String,
    "publishedTime": Date,
    "content": {
        "image": String,
        "video": String,
        "text": String,
        "_id": String
    }
    "likedIdList": [];
    "__v": Number
}

export interface comment {
    "publisherName": String,
    "publishedTime": Date,
    "content": {
        "image": String,
        "video": String,
        "text": String,
        "_id": String
    },
    "_id": String

}