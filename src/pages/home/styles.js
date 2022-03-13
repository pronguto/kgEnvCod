import styled from "styled-components";

export const Container = styled.main`
  border-top: 0.4px solid #929292;
  margin-bottom: 40px;
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;
export const MainContentImg = styled.img`
  max-width: 210px;
  max-height: 210px;
`;
export const MainContentWrited = styled.h2`
  color: white;
  font-weight: 400px;
  font-family: Righteous;
  font-size: 50px;
  line-height: 40px;
`;

export const MainContentButton = styled.button`
  background-color: #ffffff;
  width: 180px;
  height: 60px;
  border: none;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-family: Righteous;
  color: #645757;
  margin-top: 10px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(236, 214, 196, 0.53);
    transition: background 0.5s;
  }
`;
export const DevImage = styled.img`
  margin-top: 30px;
  max-width: 410px;
  max-height: 410px;
`;

export const QuestionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
`;

export const QuestionsContentTitle = styled.h3`
  border-top: 0.4px solid #929292;
  padding-top: 50px;
  color: white;
  font-family: "Sarala", cursive;
  margin-bottom: 16px;
`;

export const QuestionsContentAnswers = styled.p`
  color: #fff2ef;
  font-family: "Sarala";
  font-size: 13.5px;
  font-weight: 400;
`;
