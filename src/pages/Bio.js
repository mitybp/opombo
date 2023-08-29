import { BioContainer, BioButton, BioDivisor } from "../styled";
const Bio = () => {
  return (
    <BioContainer>
      <img
        src="https://opomboapi.vercel.app/logo-square.png"
        style={{ width: "8rem" }}
        alt="logo"
      />
      <h1>O Pombo Jornal</h1>
      <BioDivisor />
      <BioButton href="/">Postagens</BioButton>
      <BioButton href="/sobre">Sobre nós</BioButton>
      <BioButton href="/projeto-doce-solidario">
        Projeto Doce Solidário
      </BioButton>
      <BioButton href="/blog">Blog</BioButton>
      <BioButton href="/autores">Autores</BioButton>
      <BioButton href="https://instagram.com/opombo.jornal" target="_blank">
        Instagram
      </BioButton>
    </BioContainer>
  );
};

export default Bio;
