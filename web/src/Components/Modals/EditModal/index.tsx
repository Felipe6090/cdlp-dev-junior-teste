import * as S from "./styles";

import EditModalComponent from "./childrens/EditModalComponent";

import { IPosts } from "../../../types/PostsTypes";

type IType = {
  isOpen: boolean;
  onClose: () => void;
  currentPost: IPosts;
};

export default function EditModal({ isOpen, onClose, currentPost }: IType) {
  return (
    <S.ModalMainDiv open={isOpen} onClose={onClose}>
      <EditModalComponent currentPost={currentPost} onClose={onClose} />
    </S.ModalMainDiv>
  );
}
