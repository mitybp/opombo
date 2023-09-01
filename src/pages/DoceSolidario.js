import Header from "../components/Header";
import { Button, Container } from "../styled";

const DoceSolidario = () => {
  document.title = "Projeto Doce Solidário - O Pombo";
  return (
    <main>
      <Header />
      <Container>
        <h1>Projeto Doce Solidário</h1>
        <p className="content-p">
          O Projeto Doce Solidário é uma iniciativa promovida pelo Jornal O Pombo, do Colégio Integral, com o objetivo de arrecadar fundos para a ONG Mãos Invisíveis. Essa ação solidária busca unir a comunidade escolar em prol de uma causa nobre, proporcionando uma oportunidade de ajudar aqueles que mais precisam.
        </p>
        <p className="content-p">
          Durante o projeto, a arrecadação de fundos para a ONG Mãos Invisíveis será feita por meio da venda de doces nos eventos realizados nos finais de semana, bem como nas oficinas promovidas durante o período da noite. Essas iniciativas proporcionarão oportunidades para que os estudantes, professores, funcionários e responsáveis possam colaborar de maneira saborosa e engajada.
        </p>
        <p className="content-p">
          Além disso, o Jornal O Pombo também promoverá campanhas de conscientização e sensibilização, divulgando dados sobre a ONG Mãos Invisíveis e o trabalho relevante que ela desempenha em benefício de pessoas em situação de vulnerabilidade social. Essas ações visam despertar a empatia e o espírito de solidariedade em toda a comunidade escolar.
        </p>
        <p className="content-p">
        Ao final do projeto, todo o valor arrecadado será destinado à ONG Mãos Invisíveis, que utilizará esses recursos para desenvolver e ampliar seus projetos sociais, oferecendo assistência, apoio e oportunidades para aqueles que mais necessitam.
        </p>
        <p className="content-p">
          O Projeto Doce Solidário é uma oportunidade não apenas de ajudar financeiramente, mas também de promover a conscientização sobre a importância de se engajar em ações sociais e de cultivar valores como solidariedade, generosidade e compaixão. É uma iniciativa que fortalece os laços da comunidade escolar e contribui para a construção de um mundo mais justo e igualitário.
        </p>
        <Button
          href="https://maosinvisiveis.com.br/#secao-ajude-fazendo-uma-doacao"
          target="_blank"
        >
          Apoie o Mãos Invisíveis
        </Button>
      </Container>
    </main>
  );
};

export default DoceSolidario;
