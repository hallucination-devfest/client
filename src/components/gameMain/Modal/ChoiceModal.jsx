import React from "react";
import * as S from "./ChoiceModal.styles";
import Modal from "../../common/Modal/Modal";
import AgentMiniProfile from "../../common/AgentProfile/AgentMiniProfile";
import { useNavigate } from "react-router-dom";

const Content = ({ name }) => {
  return (
    <S.Content>
      <AgentMiniProfile
        imgSrc={`/agents/${name}.png`}
        agentName={name}
        color="black"
      />
      <p>
        {name}를 선택하셨습니다. <br />
        {name}와 채팅 또는 지목하시겠습니까?
      </p>
    </S.Content>
  );
};

function ChoiceModal({ setModalState, name, onPick }) {
  const navigate = useNavigate();

  return (
    <Modal
      type="choice"
      onChat={() => navigate("/chatting")}
      onPick={onPick}
      onClose={() => setModalState(false)}
      content={<Content name={name} />}
    />
  );
}
// onChat, onPick 부분 수정
export default ChoiceModal;
