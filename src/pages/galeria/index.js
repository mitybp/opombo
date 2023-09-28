import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Container, CardList, CardSimple } from "../../styled";

const Galeria = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://opomboapi.vercel.app/app/index.json")
      .then((res) => res.json())
      .then((dt) => {
        dt.galeria[0].id === 0
          ? setPosts(dt.galeria.reverse())
          : setPosts(dt.galeria);
      });
  });

  document.title = "Galeria - O Pombo Jornal";
  return (
    <main>
      <Header />
      <Container>
        <h1>Galeria</h1>
      </Container>
      <CardList>
        {posts
          ? posts.map((p) => (
              <CardSimple key={p.id} href={p.link?p.link:""} target={p.target}>
                <img
                  src={`https://opomboapi.vercel.app/app/galeria/${p.id}.${p.type}`}
                />
                <small>
                  {p.caption} ・ {p.author} ・ {p.date}
                </small>
              </CardSimple>
            ))
          : ""}
      </CardList>
      <Loading visible={posts.length === 0 ? true : false} />
    </main>
  );
};

export default Galeria;
