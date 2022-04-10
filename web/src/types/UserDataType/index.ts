import { IPosts } from "../PostsTypes";

export type IUserData = {
  id: string;
  created_datetime: number;
  username: string;
  password: string;
  posts: IPosts[];
};
