import React from "react";
import * as S from "./InfoModal.styles";
import Modal from "../../common/Modal/Modal";

function InfoModal({ modalState, setModalState }) {
  const Content = () => {
    return (
      <S.Content>
        <p>
          총 8명의 에이전트 중 n명의 라이전트를 찾아야 합니다. 라이전트의 수는
          라운드 번호와 동일합니다. <br /> <br />
          에이전트 캐릭터를 클릭하면 해당 순서대로 제시어에 대해 설명을
          시작합니다. 이 설명이 끝난 후 여러분은 의심이 가는 에이전트에게 추가
          질문을 할 수 있습니다. <br /> <br />각 라운드 마다 최대 2번의 추가
          질문을 할 수 있으며, 라이전트가 누군지 맞힌 후 제시어까지 알아내면
          게임을 계속할 수 있습니다! <br />
          <br />
          파이팅 행운을 빌어요~
        </p>
      </S.Content>
    );
  };
  return (
    <>
      {modalState && (
        <Modal
          title="라이전트 게임을 시작합니다!"
          type="basic"
          onClose={() => setModalState(false)}
          content={<Content />}
        />
      )}
    </>
  );
}

export default InfoModal;
