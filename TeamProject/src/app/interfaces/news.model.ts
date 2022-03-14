export interface newsTemplate {
  _id: string;
  publisherName: string;
  publishedTime: string;
  content: Content;
  comment?: string;
}

interface Content {
  image: string;
  video: string;
  text: string;
  _id: string;
}
