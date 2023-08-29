import { useState, useEffect } from "react";
import Header from "../components/Header";
import { FunnelSimple } from "@phosphor-icons/react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { Container, SearchInputContainer, SearchButton, SearchInput, SearchDropdown, CardList } from "../styled";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [inp, setInp] = useState("");
  const [byTitle, setByTitle] = useState(true);
  const [ddState, setDdState] = useState(false);

  document.title = "Pesquisar - O Pombo Jornal";

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => setPosts(dt["db"]));
    }
    fetchData();
  });
  return (
    <main>
      <Header />
      <Container>
        <h1>Pesquisar</h1>
        <SearchInputContainer>
          <SearchButton onClick={() => setDdState(!ddState)}>
            <FunnelSimple />
          </SearchButton>
          <SearchInput
            type="text"
            placeholder={`Pesquisar por ${byTitle ? "título" : "conteúdo"}`}
            onChange={(e) => setInp(e.target.value)}
            value={inp}
          />
        </SearchInputContainer>
        <SearchDropdown
          style={{ display: ddState ? "flex" : "none" }}
        >
          <button onClick={() => setInp("")}>Apagar</button>
          <button onClick={() => setByTitle(!byTitle)}>Mudar filtro</button>
        </SearchDropdown>
      </Container>
      <CardList>
        {inp
          ? posts.map((p) => {
              if (byTitle) {
                if (p.title.toLowerCase().includes(inp.toLowerCase()))
                  return <Card post={p} />;
              } else {
                if (p.content.toLowerCase().includes(inp.toLowerCase()))
                  return <Card post={p} />;
              }
            })
          : "Digite algo para pesquisar"}
      </CardList>
      <Loading visible={posts.length===0?true:false}/>
    </main>
  );
};

export default Search;
