import React from "react";
import Header from "../components/Header";
import { CardList, Container, CardSimple } from "../styled";
import { strFormat } from "../api/strFormat";

const Cargos = () => {
  document.title = "Cargos - O Pombo Jornal";
  let cargos = [
    {
      name: "Redação",
      url: "/cargos/redacao",
    },
    {
      name: "Edição",
      url: "/cargos/edicao",
    },
    {
      name: "Repórters",
      url: "/cargos/reporters",
    },
  ];
  return (
    <main>
      <Header />
      <Container>
        <h1>Cargos</h1>
      </Container>
      <CardList>
        {cargos.map((c, index) => (
          <CardSimple href={c.url} key={index}>
            {c.name}
          </CardSimple>
        ))}
      </CardList>
    </main>
  );
};

export default Cargos;
