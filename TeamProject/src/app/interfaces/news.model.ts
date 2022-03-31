import { compileDeclareClassMetadata } from "@angular/compiler";

// export class newsTemplate {

//   constructor(
//     private _id?: string,
//     private publisherName: string = "",
//     private publishedTime: string = "",
//     private content: Content = new Content(),
//     private comment: Comment[] = [new Comment()],
//     private likedIdList: [] = [],
//     private __v?: number,
//     private body?: any,
//   ) {}

// }

export interface newsTemplate {
  _id?: string;
  publisherName: string;
  publishedTime?: string;
  content?: Content;
  comment?: Comment[];
  likedIdList?: [];
  __v?: number;
  // body?: any;
}

interface Comment {
  _id?: string;
  publisherName?: string;
  publishedTime?: string;
  content?: Content;
}

// class Comment {
//   constructor(
//     publisherName: string = "",
//   publishedTime: string = "",
//   content: Content = new Content(),
//   _id?: string,
//   ){}
// }

interface Content {
  image?: string;
  video?: string;
  text?: string;
  _id?: string;
}

// class Content {
//   constructor(
//   image: string = "",
//   video: string = "",
//   text: string = "",
//   _id?: string,
//   ){}
// }
