export interface Story {
    "_id": string,
    "publisherName": string,
    "publishedTime": string,
    "content": {
        "image": string,
        "video": string,
        "text": string,
        "_id": string
    }
    , 
    "comment": Comment[],
    "likedIdList": [],
    "__v": number,

}
export interface Comment {
        "publisherName": string,
        "publishedTime": string,
        "content": {
            "image": string,
            "video": string,
            "text": string,
            "_id": string
        }
    , "_id": string,
}

