import { Comment } from "./comment.model";
import { Content } from "./content.model";

export interface News {
    comment:Comment[];
    content:Content;
    likedIDList:any[];
    publishedTime:string;
    publisherName:string;
    __v:number;
    _id:string;
}