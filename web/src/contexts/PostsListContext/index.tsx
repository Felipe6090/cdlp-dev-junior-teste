import { useState, createContext, Dispatch } from "react";
import { IPosts } from "../../types/PostsTypes";

type IProviderTypes = {
  children: JSX.Element | JSX.Element[];
  state: any;
};

type AuthContextType = {
  postsListData: IPosts[];
  setPostsListData: Dispatch<any>;
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
