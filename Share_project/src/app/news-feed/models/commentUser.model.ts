import { content } from "./content.model";

export interface commentUser {
    "publisherName": string,
    "publishedTime": string,
    "content": content,
    "_id": string
}