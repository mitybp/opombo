import { useState, useEffect } from "react";
import Header from "../components/Header";
import { strFormat } from "../api/strFormat";

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
      <div className="resp-container">
        <h1>Autores</h1>
      </div>
      <div className="card-list">
        {authors.reverse().map((a) => (
          <a className="card card-author" href={`/${strFormat(a[0])}`}>
            {a[0]}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Authors;
