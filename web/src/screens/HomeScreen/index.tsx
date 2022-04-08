import FormComponent from "./Components/FormComponent";

import PostList from "./Components/PostList";

import * as S from "./styles";

export default function HomeScreen() {
  return (
    <S.MainDiv>
      <FormComponent />

      <PostList />
    </S.MainDiv>
  );
}
