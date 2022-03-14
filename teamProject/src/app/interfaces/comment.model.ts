import { Content } from "./content.model";

export interface Comment{
    content:Content;
    publishedTime:string;
    publisherName:string;
    _id:string;
}