import * as S from "./styles";

import EditModalComponent from "./childrens/EditModalComponent";

type IType = {
  isOpen: boolean;
  onClose: () => void;
  currentPost: IPosts;
};

type IPosts = {
  id: string;
  username: string;
  userId?: string;
  created_datetime: Date;
  title: string;
  content: string;
};
export default function EditModal({ isOpen, onClose, currentPost }: IType) {
  return (
    <S.ModalMainDiv open={isOpen} onClose={onClose}>
      <EditModalComponent currentPost={currentPost} onClose={onClose} />
    </S.ModalMainDiv>
  );
}
