export interface News {
  _id: string;
  publisherName: string;
  publishedTime: string;
  content: {
    image: string;
    video: string;
    text: string;
    _id: string;
  };
  comment: 
    {
      _id: string;
      publisherName: string;
      publishedTime: string;
      content: {
        image: string;
        video: string;
        text: string;
        _id: string;
      };
    }[];
  likedIdList: {
    _id: string;
  }[];
  __v: number;
}

// interface Comment {
//   _id: string;
//   publisherName: string;
//   publishedTime: string;
//   content: Content;
// }

// interface Content {
//   image: string;
//   video: string;
//   text: string;
//   _id: string;
// }
