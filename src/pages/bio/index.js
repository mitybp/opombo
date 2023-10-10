import { BioContainer, BioButton, BioDivisor } from "../../styled";
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
      <BioButton href="/">Matérias 📑</BioButton>
      <BioButton href="/sobre">Sobre nós 🙋</BioButton>
      <BioButton href="/interclasse">Interclasse ⚽</BioButton>
      <BioButton href="/galeria">Galeria 🖼️</BioButton>
      <BioButton href="/blog">Blog 🤳</BioButton>
      <BioButton href="/cargos/redatores">Autores ✍️</BioButton>
      <BioButton href="https://instagram.com/opombo.jornal" target="_blank">
        Instagram
      </BioButton>
      <br/><p className='copyright'>O Pombo Jornal © {new Date().getFullYear()===2024?"2023-2024":"2023"} - Todos os direitos reservados.</p>
    </BioContainer>
  );
};

export default Bio;
