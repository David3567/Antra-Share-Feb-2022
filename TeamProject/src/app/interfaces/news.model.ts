export interface newsTemplate {
  _id: string;
  publisherName: string;
  publishedTime: string;
  content: Content;
  comment?: [Comment];
  likedIdList: [];
  __v: number;
}

interface Comment {
  _id: string;
  publisherName: string;
  publishedTime: string;
  content: Content;
}

interface Content {
  image: string;
  video: string;
  text: string;
  _id: string;
}
