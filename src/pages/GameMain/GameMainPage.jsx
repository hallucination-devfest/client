import { useSelector, useDispatch } from "react-redux";
import * as S from "./GameMainPage.styles";
import AgentProfile from "../../components/common/AgentProfile/AgentProfile";
import { updateChat, clearChat, updateZIndex } from "../../redux/gameSlice";

function GameMainPage() {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.game.agents);
  const currentRound = useSelector((state) => state.game.currentRound);
  const category = useSelector((state) => state.game.category);
  const remainingChats = useSelector((state) => state.game.remainingChats);

  const handleAgentClick = (agentId) => {
    dispatch(updateZIndex({ agentId }));
    dispatch(updateChat({ agentId, message: "test123" }));

    setTimeout(() => {
      dispatch(clearChat({ agentId }));
    }, 3000);
  };

  return (
    <>
      <S.Container>
        <S.TopLayout>
          <S.Title>Round {currentRound}</S.Title>
          <S.Subtitle>카테고리: {category}</S.Subtitle>
        </S.TopLayout>
        <S.Description>
          모든 캐릭터의 소개를 듣고 누가 거짓말을 하고 있는 <br />
          라이전트인지 맞혀보세요!
        </S.Description>
        <S.GridWrapper>
          <S.GridLayout>
            {agents.map((agent, idx) => (
              <AgentProfile
                key={agent.id}
                agentName={agent.name}
                imgSrc={agent.image}
                currentChat={agent.currentChat}
                agentIdx={idx}
                onClick={() => handleAgentClick(agent.id)}
                zIndex={agent.zIndex}
              />
            ))}
          </S.GridLayout>
        </S.GridWrapper>
        <S.BottomLayout>
          채팅 횟수: {remainingChats}회
          <S.BottomInfoIcon>
            <img src="/info_icon.svg" />
          </S.BottomInfoIcon>
        </S.BottomLayout>
      </S.Container>
    </>
  );
}

export default GameMainPage;
