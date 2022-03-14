export interface NewsContent {
  image: string;
  video: string;
  text: string;
  _id: string;
}

export interface CommentContent {
  image: string;
  video: string;
  text: string;
  _id: string;
}

export interface Comment {
  publisherName: string;
  publishedTime: Date;
  content: CommentContent;
  _id: string;
}

export interface News {
  _id: string;
  publisherName: string;
  publishedTime: Date;
  content: NewsContent;
  comment: Comment[];
  likedIdList: any[];
  __v: number;
}
