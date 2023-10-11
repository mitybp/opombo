import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import { CardList, Container } from "../../../../styled";
import { strFormat } from "../../../../api/strFormat";
import { useParams } from "react-router-dom";
import Card from "../../../../components/Card";
import Loading from "../../../../components/Loading";

const Pessoa = () => {
  const { cargo, nome } = useParams();
  const [pessoa, setPessoa] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/db/cargos.json")
        .then((res) => res.json())
        .then((dt) => {
          dt[cargo].map((p) => {
            if (strFormat(p[0]) === nome) {
              setPessoa(p);
            }
          });
        })
        .catch((err) => {
          setPessoa([]);
          document.location.reload();
        });
      fetch("https://opomboapi.vercel.app/db/posts.json")
        .then((res) => res.json())
        .then((dt) => setPosts(dt["posts"]))
        .catch((err) => {
          setPosts([]);
          document.location.reload();
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
          : "Não foi possível encontrar no banco de dados."}
      </CardList>
      <Loading visible={posts.length === 0 ? true : false} />
    </main>
  );
};

export default Pessoa;
