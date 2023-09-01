import { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { Container, CardList } from "../styled";

const Saved = () => {
  const [posts, setPosts] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => {
          setPosts(dt["db"]);
          setSaved(
            localStorage.getItem("saved") == null
              ? []
              : JSON.parse(localStorage.getItem("saved"))
          );
        });
    }
    fetchData();
  });

  document.title = "Salvos - O Pombo Jornal";

  return (
    <main>
      <Header />
      <Container>
        <h1>Salvos</h1>
      </Container>
      <CardList>
        {saved.length == 0 ? (
          <p>Você não salvou algo ainda!</p>
        ) : (
          saved.map((id) => <Card post={posts[id]} key={id} />)
        )}
      </CardList>
      <Loading visible={posts.length===0?true:false}/>
    </main>
  );
};

export default Saved;
