import { Comment } from "./comment.model";

export interface Story {
    "_id": String,
    "publisherName": String,
    "publishedTime": Date,
    "content": {
        "image": String,
        "video": String,
        "text": String,
        "_id": String
    },
    "comment": [Comment],
    "likedIdList": [];
    "__v": Number
}