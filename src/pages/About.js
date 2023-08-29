import Header from "../components/Header";
import { Container } from "../styled";

const About = () => {
  document.title = "Sobre - O Pombo Jornal";
  return (
    <main>
      <Header />
      <Container>
        <h1>Sobre nós</h1>
        <p>
          Por meio de uma proposta com o intuito de veicular as principais
          informações sobre os acontecimentos do Colégio Integral, surgiu o
          jornal "O Pombo", uma referência ao ato de voar distribuindo notícias,
          pesquisas, artigos, conhecimentos científicos e filosóficos, sem
          deixar o entretenimento de lado.
        </p>
        <p>
          Motivado em manter todos por dentro dos fatos que circulam pelo
          colégio, bem como dos assuntos que impactam no meio escolar, o jornal
          conta com uma equipe de alunos do 9° ano B empenhada em buscar
          informações, dados e fontes, ao mesmo tempo em que trabalha
          diariamente na checagem dos mesmos, evitando as famosas fake-news.
        </p>
      </Container>
    </main>
  );
};
export default About;
