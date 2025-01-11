import { useSelector } from "react-redux";
import * as S from "./GameMainPage.styles";
import AgentProfile from "../../components/common/AgentProfile/AgentProfile";

function GameMainPage() {
  // Redux store에서 필요한 상태들을 가져옵니다
  const agents = useSelector((state) => state.game.agents);
  const currentRound = useSelector((state) => state.game.currentRound);
  const category = useSelector((state) => state.game.category);
  const remainingChats = useSelector((state) => state.game.remainingChats);

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
            {agents.map((agent) => (
              <AgentProfile
                key={agent.id}
                agentName={agent.name}
                imgSrc={agent.image}
              />
            ))}
          </S.GridLayout>
        </S.GridWrapper>

        <S.BottomLayout>채팅 횟수: {remainingChats}회</S.BottomLayout>
      </S.Container>
    </>
  );
}

export default GameMainPage;
