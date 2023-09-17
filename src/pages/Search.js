import { useState, useEffect } from "react";
import Header from "../components/Header";
import { FunnelSimple, X } from "@phosphor-icons/react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { Container, SearchInputContainer, SearchButton, SearchInput, SearchDropdown, CardList, SearchDropdownButton } from "../styled";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [inp, setInp] = useState("");

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
          <SearchButton onClick={() => setInp("")}>
            <X />
          </SearchButton>
          <SearchInput
            type="text"
            placeholder={"Pesquisar por título"}
            onChange={(e) => setInp(e.target.value)}
            value={inp}
            name="input"
          />
        </SearchInputContainer>
      </Container>
      <CardList>
        {inp
          ? posts.map((p) => {
              if (p.title.toLowerCase().includes(inp.toLowerCase()))
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
