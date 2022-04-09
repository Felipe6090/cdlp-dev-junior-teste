import * as S from "./styles";

import EditModalComponent from "./childrens/EditModalComponent";

type IType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EditModal({ isOpen, onClose }: IType) {
  return (
    <S.ModalMainDiv open={isOpen} onClose={onClose}>
      <EditModalComponent onClose={onClose} />
    </S.ModalMainDiv>
  );
}
