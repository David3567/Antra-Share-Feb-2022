export interface newsTemplate {
  _id?: string;
  publisherName: string;
  publishedTime?: string;
  content?: Content;
  comment?: Comment[];
  likedIdList?: [];
  __v?: number;
}

export interface Comment {
  _id?: string;
  publisherName?: string;
  publishedTime?: string;
  content?: Content;
}

export interface Content {
  image?: string;
  video?: string;
  text?: string;
}
