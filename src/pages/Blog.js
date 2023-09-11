import { useState, useEffect } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { Container, CardList, CardSimple } from "../styled";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://opomboapi.vercel.app/app/index.json")
      .then((res) => res.json())
      .then((dt) => {
        dt["blog"][0]["id"] === 0
          ? setPosts(dt["blog"].reverse())
          : setPosts(dt["blog"]);
      });
  });

  document.title = "Blog - O Pombo Jornal";
  return (
    <main>
      <Header />
      <Container>
        <h1>Blog</h1>
      </Container>
      <CardList>
        {posts.map((p) => (
          <CardSimple id={`post-${p.id}`}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
            <i style={{ marginTop: 10, fontSize: 15 }}>{p.author} ・ {p.date}</i>
          </CardSimple>
        ))}
      </CardList>
      <Loading visible={posts.length===0?true:false}/>
    </main>
  );
};

export default Blog;
