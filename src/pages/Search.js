import { useState, useEffect } from "react";
import Header from "../components/Header";
import { FunnelSimple, X } from "@phosphor-icons/react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { Container, SearchInputContainer, SearchButton, SearchInput, SearchDropdown, CardList, SearchDropdownButton } from "../styled";

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
            {
              ddState ? (
                <X />
              ):(
                <FunnelSimple />
              )
            }
          </SearchButton>
          <SearchInput
            type="text"
            placeholder={`Pesquisar por ${byTitle ? "título" : "conteúdo"}`}
            onChange={(e) => setInp(e.target.value)}
            value={inp}
            name="input"
          />
        </SearchInputContainer>
        <SearchDropdown
          style={{ display: ddState ? "flex" : "none" }}
        >
          <SearchDropdownButton onClick={() => setInp("")}>Apagar</SearchDropdownButton>
          <SearchDropdownButton onClick={() => setByTitle(!byTitle)}>Mudar filtro</SearchDropdownButton>
        </SearchDropdown>
      </Container>
      <CardList>
        {inp
          ? posts.map((p) => {
              if (byTitle) {
                if (p.title.toLowerCase().includes(inp.toLowerCase()))
                  return <Card post={p} key={p.id} />;
              } else {
                if (p.content.toLowerCase().includes(inp.toLowerCase()))
                  return <Card post={p} key={p.id} />;
              }
            })
          : "Digite algo para pesquisar"}
      </CardList>
      <Loading visible={posts.length===0?true:false}/>
    </main>
  );
};

export default Search;
