import * as S from "./styles";

import DeleteAlertModalComponent from "./childrens/DeleteAlertModalComponent";

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
