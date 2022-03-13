import Dev from "../../assets/dev.png";
import Logo from "../../assets/kgLogo.png";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  Container,
  DevImage,
  MainContent,
  MainContentButton,
  MainContentImg,
  MainContentWrited,
  QuestionContent,
  QuestionsContentAnswers,
  QuestionsContentTitle,
} from "./styles";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <MainContent>
          <div>
            <MainContentImg src={Logo} alt="KG" />
            <MainContentWrited>Environment Coding</MainContentWrited>
            <a
              href="https://discord.com/invite/H9XrhE4c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MainContentButton>Acessar Comunidade</MainContentButton>
            </a>
          </div>
          <DevImage src={Dev} alt="BlankSpace" />
        </MainContent>

        <QuestionContent>
          <QuestionsContentTitle>O que é a KG?</QuestionsContentTitle>
          <QuestionsContentAnswers>
            1.A KG é uma <strong>ação comunitária</strong> ao incentivo dos
            jovens aprenderem programação
          </QuestionsContentAnswers>
          <QuestionsContentAnswers>
            2.Como a KG é uma <strong>ação comunitária</strong>, ela é{" "}
            <strong>100% gratuita</strong> para todos
          </QuestionsContentAnswers>
          <QuestionsContentAnswers>
            3.Atualmente usamos a <strong>plataforma Discord</strong> para todos
            os tipos de <strong>aulas</strong> e <strong>dicas diárias</strong>
          </QuestionsContentAnswers>
        </QuestionContent>
      </Container>
      <Footer />
    </>
  );
};
