import { useEffect, useState } from "react";
import Header from "../components/Header";
import { CardList, Container } from "../styled";
import { strFormat } from "../api/strFormat";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Pessoa = () => {
  const { cargo, nome } = useParams();
  const [pessoa, setPessoa] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => {
          dt.cargos[cargo].map((p) => {
            if (strFormat(p[0]) === nome) {
              setPessoa(p);
            }
          });
          setPosts(dt["db"]);
        });
    }

    fetchData();
  });
  return (
    <main>
      <Header />
      <Container>
        <h1>{pessoa[0]}</h1>
      </Container>
      <CardList>
        {pessoa[1]
          ? pessoa[1].reverse().map((id) => <Card post={posts[id]} key={id} />)
          : ""}
      </CardList>
    </main>
  );
};

export default Pessoa;
