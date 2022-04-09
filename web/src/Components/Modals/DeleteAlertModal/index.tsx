import * as S from "./styles";

import DeleteAlertModalComponent from "./childrens/DeleteAlertModalComponent";

type IType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DeleteAlertModal({ isOpen, onClose }: IType) {
  return (
    <S.ModalMainDiv open={isOpen} onClose={onClose}>
      <DeleteAlertModalComponent onClose={onClose} />
    </S.ModalMainDiv>
  );
}
