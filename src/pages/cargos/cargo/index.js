import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";
import { strFormat } from "../../../api/strFormat";
import { CardList, CardSimple, Container } from "../../../styled";
import Loading from '../../../components/Loading'

const Cargo = () => {
  const [pessoas, setPessoas] = useState([]);
  const { cargo } = useParams();
  document.title = "Cargos - O Pombo Jornal";
  let cargos = [
    "Redação",
    "Edição",
    "Repórteres"
  ];
  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/db/cargos.json")
        .then((res) => res.json())
        .then((data) => {
          setPessoas(data[cargo]);
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
        {
          pessoas?(pessoas.map((p, index) => (
          <CardSimple key={index} href={`/${cargo}/${strFormat(p[0])}`}>
            {p[0]}
          </CardSimple>
        ))):(
          "Não foi possível encontrar no banco de dados."
        )}
      </CardList>
      <Loading visible={pessoas.length===0?true:false}/>
    </main>
  );
};

export default Cargo;
