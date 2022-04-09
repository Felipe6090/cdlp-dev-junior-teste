import * as S from "./styles";

import LoginModalComponent from "./childrens/LoginModalComponent";

type IType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: IType) {
  return (
    <S.ModalMainDiv open={isOpen} onClose={onClose}>
      <LoginModalComponent onClose={onClose} />
    </S.ModalMainDiv>
  );
}
