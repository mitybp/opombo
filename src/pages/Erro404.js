import { BioContainer, BioButton, BioDivisor } from "../styled";
const Erro404 = () => {
  return (
    <BioContainer>
      <h1>Erro 404</h1>
      <p>Página não encontrada!</p>
      <BioDivisor />
      <BioButton href="/">Voltar para a página inicial</BioButton>
    </BioContainer>
  );
};

export default Erro404;
