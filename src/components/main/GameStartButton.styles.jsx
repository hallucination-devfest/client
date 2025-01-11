import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  p {
    color: white;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  background-color: white;
  width: 335px;
  height: 52px;
  padding: 12px 14px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 16px;
`;
