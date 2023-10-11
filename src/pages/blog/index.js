import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Container, CardList, CardSimple } from "../../styled";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/blog.json")
      .then((res) => res.json())
      .then((data) => {
        data[0]["id"] === 0 ? setPosts(data.reverse()) : setPosts(data);
      })
      .catch((err) => {
        setPosts([]);
        document.location.reload();
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
          <CardSimple key={p.id} style={{ cursor: "auto" }}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
            <small style={{ marginTop: 10, fontSize: 15 }}>
              {p.author} ・ {p.date}
            </small>
          </CardSimple>
        ))}
      </CardList>
      <Loading visible={posts.length === 0 ? true : false} />
    </main>
  );
};

export default Blog;
