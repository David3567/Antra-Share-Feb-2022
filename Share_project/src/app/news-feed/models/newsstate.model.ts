import { News } from "./news.model";

export interface NewsState {
    err?: string;
    storylist: News[];
  }