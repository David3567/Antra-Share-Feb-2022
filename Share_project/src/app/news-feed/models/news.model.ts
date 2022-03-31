import { commentUser } from "./commentUser.model";
import { content } from "./content.model";

export interface News {
    "_id": string | null,
    "publisherName": string | null,
    "publishedTime": string,
    "content": content,
    "comment": commentUser[],
    "likedIdList": string[],
    "__v": number | null
}