import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import { Container, CardList } from "../../styled";

const Saved = () => {
  const [posts, setPosts] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/posts.json")
      .then((res) => res.json())
      .then((dt) => {
        setPosts(dt["posts"]);
        setSaved(
          localStorage.getItem("saved") == null
            ? []
            : JSON.parse(localStorage.getItem("saved"))
        );
      });
  });

  document.title = "Salvos - O Pombo Jornal";

  return (
    <>
      <Container>
        <h1>Salvos</h1>
      </Container>
      <CardList>
        {saved.length == 0 ? (
          <p>Você não salvou algo ainda!</p>
        ) : (
          saved.map((id, index) => <Card post={posts[id]} key={index} />)
        )}
      </CardList>
      <Loading visible={posts.length === 0 ? true : false} />
    </>
  );
};

export default Saved;
