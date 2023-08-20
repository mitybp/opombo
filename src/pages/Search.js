import { useState, useEffect } from "react";
import Header from "../components/Header";
import { FunnelSimple } from "@phosphor-icons/react";
import Card from "../components/Card";

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
      <div className="resp-container">
        <h1>Pesquisar</h1>
        <div>
          <div className="search-inp-container">
            <button className="search-btn" onClick={() => setDdState(!ddState)}>
              <FunnelSimple />
            </button>
            <input
              type="text"
              placeholder={`Pesquisar por ${byTitle ? "título" : "conteúdo"}`}
              className="search-inp"
              onChange={(e) => setInp(e.target.value)}
              value={inp}
            />
          </div>
          <div
            className="search-dropdown"
            style={{ display: ddState ? "flex" : "none" }}
          >
            <button onClick={() => setInp("")}>Apagar</button>
            <button onClick={() => setByTitle(!byTitle)}>Mudar filtro</button>
          </div>
        </div>
      </div>
      <div className="card-list">
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
      </div>
    </main>
  );
};

export default Search;
