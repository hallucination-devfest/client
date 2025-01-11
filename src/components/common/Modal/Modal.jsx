import * as S from "./Modal.styles";

export default function Modal({
  title,
  content,
  type,
  onClose,
  onChat,
  onPick,
  handleNext,
}) {
  // type basic : title, content, onClose
  // type choise : content, onChat, onPick, onClose
  // type result : title, context, handleNext
  // type guess : title, context, handleNext

  return (
    <S.Container>
      <S.ModalContainer>
        {type === "basic" && (
          <S.ContentContainer>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
            <S.Button onClick={onClose}>확인</S.Button>
          </S.ContentContainer>
        )}
        {type === "choice" && (
          <S.ContentContainer>
            <S.CloseButton src="/closeIcon.svg" alt="닫기" onClick={onClose} />
            <S.Content>{content}</S.Content>
            <S.ButtonContainer>
              <S.Button onClick={onChat}>채팅하기</S.Button>
              <S.Button onClick={onPick}>지목하기</S.Button>
            </S.ButtonContainer>
          </S.ContentContainer>
        )}
        {type === "result" && (
          <S.ContentContainer>
            <S.SpecialTitle>{title}</S.SpecialTitle>
            <S.Content>{content}</S.Content>
            <S.Button onClick={handleNext}>이동하기</S.Button>
          </S.ContentContainer>
        )}
        {type === "guess" && (
          <S.ContentContainer>
            <S.SpecialTitle>{title}</S.SpecialTitle>
            <S.Content>{content}</S.Content>
            <S.Button onClick={handleNext}>입력하기</S.Button>
          </S.ContentContainer>
        )}
      </S.ModalContainer>
    </S.Container>
  );
}
