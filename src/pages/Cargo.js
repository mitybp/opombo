import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { strFormat } from "../api/strFormat";
import { CardList, CardSimple, Container } from "../styled";

const Cargo = () => {
  const [pessoas, setPessoas] = useState([]);
  const { cargo } = useParams();
  document.title = "Cargos - O Pombo Jornal";
  let cargos = [
    "Redação",
    "Edição",
    "Repórters",
    "Fotografia",
    "Entretenimento",
    "Divulgação",
    "T.I",
  ];
  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => {
          setPessoas(dt.cargos[cargo]);
        });
    }

    fetchData();
  });
  return (
    <main>
      <Header />
      <Container>
        <h1>{cargos.map((c) => (strFormat(c) === cargo ? c : ""))}</h1>
      </Container>
      <CardList>
        {pessoas.map((p, index) => (
          <CardSimple key={index} href={`/cargos/${cargo}/${strFormat(p[0])}`}>
            {p[0]}
          </CardSimple>
        ))}
      </CardList>
    </main>
  );
};

export default Cargo;
