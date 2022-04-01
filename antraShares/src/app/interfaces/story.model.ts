export interface Story {
  _id: string;
  publisherName: string;
  publishedTime: Date;
  content: {
    image: string;
    video: string;
    text: string;
    _id: string;
  };
  comment: [
    {
      publisherName: string;
      publishedTime: Date;
      content: {
        image: string;
        video: string;
        text: string;
        _id: string;
      };
      _id: string;
    }
  ];
  likedIdList: [];
  __v: number;
}
export interface Comment{
  publisherName: string;
      publishedTime: Date;
      content: {
        image: string;
        video: string;
        text: string;
        _id: string;
      };
      _id: string;
}
interface Content {
  image?: string;
  video?: string;
  text?: string;
  _id?: string;
}
export interface newsTemplate {
  _id?: string;
  publisherName: string;
  publishedTime?: string;
  content?: Content;
  comment?: [Comment];
  likedIdList?: [];
  __v?: number;
  body?: any;
}