import { useState, useEffect } from "react";
import Header from "../components/Header";
import { strFormat } from "../api/strFormat";
import Loading from "../components/Loading";
import { Container, CardList, CardSimple } from "../styled";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => setAuthors(dt["authors"]));
    }
    fetchData();
  });

  document.title = "Autores - O Pombo Jornal";

  return (
    <main>
      <Header />
      <Container>
        <h1>Autores</h1>
      </Container>
      <CardList>
        {authors.reverse().map((a) => (
          <CardSimple href={`/${strFormat(a[0])}`}>
            {a[0]}
          </CardSimple>
        ))}
      </CardList>
      <Loading visible={authors.length===0?true:false}/>
    </main>
  );
};

export default Authors;
