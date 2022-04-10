import { useState, createContext, Dispatch } from "react";

type IProviderTypes = {
  children: JSX.Element | JSX.Element[];
  state: any;
};

type AuthContextType = {
  postsListData: IPosts[];

  setPostsListData: Dispatch<any>;
};

type IPosts = {
  id: string;
  username: string;
  userId?: string;
  created_datetime: Date;
  title: string;
  content: string;
};

const PostsListContext = createContext({} as AuthContextType);

function PostsListProvider({ children, state }: IProviderTypes) {
  const [postsListData, setPostsListData] = useState(state);

  return (
    <PostsListContext.Provider value={{ postsListData, setPostsListData }}>
      {children}
    </PostsListContext.Provider>
  );
}

export { PostsListProvider, PostsListContext };
