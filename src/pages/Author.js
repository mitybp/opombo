import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import { strFormat } from "../api/strFormat";

const Author = () => {
  const { author_name } = useParams();
  const [author, setAuthor] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => {
          dt["authors"].map((a) => {
            if (strFormat(a[0]) === author_name) {
              setAuthor(a);
            }
          });
          setPosts(dt["db"]);
        });
    }

    fetchData();
  });

  document.title = `${author[0]} - O Pombo Jornal`;

  return (
    <main>
      <Header />
      <div className="resp-container">
        <h1>{author[0]}</h1>
      </div>
      <div className="card-list">
        {author[1]
          ? author[1].reverse().map((id) => <Card post={posts[id]} />)
          : "Não foi possível encontrar o autor"}
      </div>
    </main>
  );
};

export default Author;
