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
export interface Comments {
  publisherName: string;
  publishedTime: Date;
  content: {
    image: string;
    video: string;
    text: string;
    _id?: string;
  };
  _id?: string;
}
