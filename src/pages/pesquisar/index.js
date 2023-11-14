import { useState, useEffect } from "react";
import { X } from "@phosphor-icons/react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import {
  Container,
  SearchInputContainer,
  SearchButton,
  SearchInput,
  CardList,
} from "../../styled";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [inp, setInp] = useState("");

  document.title = "Pesquisar - O Pombo Jornal";

  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/posts.json")
      .then((res) => res.json())
      .then((dt) => setPosts(dt["posts"]));
  });
  return (
    <>
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
              if (p.title.toLowerCase().includes(inp.toLowerCase())) {
                return <Card post={p} key={p.id} />;
              }
            })
          : "Digite algo para pesquisar"}
      </CardList>
      <Loading visible={posts.length === 0 ? true : false} />
    </>
  );
};

export default Search;
