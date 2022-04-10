import * as S from "./styles";

import DeleteAlertModalComponent from "./childrens/DeleteAlertModalComponent";

import { IPosts } from "../../../types/PostsTypes";

type IType = {
  isOpen: boolean;
  onClose: () => void;
  currentPost: IPosts;
};

export default function DeleteAlertModal({
  isOpen,
  onClose,
  currentPost,
}: IType) {
  return (
    <S.ModalMainDiv open={isOpen} onClose={onClose}>
      <DeleteAlertModalComponent currentPost={currentPost} onClose={onClose} />
    </S.ModalMainDiv>
  );
}
