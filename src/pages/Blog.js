import { useState, useEffect } from "react";
import Header from "../components/Header";

const Blog = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://opomboapi.vercel.app/app/index.json")
      .then((res) => res.json())
      .then((dt) => {
        dt["blog"][0]["id"] === 0
          ? setPost(dt["blog"])
          : setPost(dt["blog"].reverse());
      });
  });

  document.title = "Blog - O Pombo Jornal";
  return (
    <main>
      <Header />
      <div className="resp-container">
        <h1>Blog</h1>
      </div>
      <div className="card-list">
        {post.map((p) => (
          <div className="card card-author">
            <h3>{p.title}</h3>
            <p>{p.content}</p>
            <i style={{ marginTop: 10, fontSize: 15 }}>{p.date}</i>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
