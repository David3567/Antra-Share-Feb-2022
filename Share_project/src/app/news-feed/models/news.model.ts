import { commentUser } from "./commentUser.model";
import { content } from "./content.model";

export interface News {
    "_id": string,
    "publisherName": string,
    "publishedTime": string,
    "content": content,
    "comment": commentUser[],
    "likedIdList": [],
    "__v": number
}