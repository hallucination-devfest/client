import React from "react";
import * as S from "./GuideModal.styles";
import Modal from "../../common/Modal/Modal";

function GuideModal({ modalState, setModalState }) {
  const Content = () => {
    return (
      <S.Content>
        <p>
          여러분에게는 2번의 채팅 기회가 주어집니다. 에이전트를 선택하고 채팅을
          진행하거나, 라이전트가 누구인지 맞혀보세요!
        </p>
      </S.Content>
    );
  };
  return (
    <>
      {modalState && (
        <Modal
          title="에이전트를 선택하세요!"
          type="basic"
          onClose={() => setModalState(false)}
          content={<Content />}
        />
      )}
    </>
  );
}

export default GuideModal;
