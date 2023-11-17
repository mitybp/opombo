import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import {
  Container,
  PostHeader,
  PostInfo,
  PostShareBar,
  PostTitle,
} from "../../../../styled";
import { useParams } from "react-router-dom";
import { strFormat } from "../../../../api/strFormat";

const EspacoAbertoClassPost = () => {
  const { projectName, postTitle } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/espaco-aberto.json")
      .then((res) => res.json())
      .then((data) => {
        data.map((p, index) => {
          let dataName = strFormat(p.name);
          if (dataName == projectName) {
            p.posts.map((dataPost) => {
              if (strFormat(dataPost.title) === postTitle) {
                setPost({...dataPost, project_name: p.name});
              }
            });
          }
        });
      });
  });

  // console.error = console.warn = () => {};
  document.title = post ? `${post.title} - Espaço Aberto - Jornal O Pombo` : "";
  return (
    <>
      {post && (
        <div>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostInfo>
              <a href={`/espaco-aberto/${projectName}`}>{post.project_name}</a> ・ {post.author} ・ {post.date}
            </PostInfo>
          </PostHeader>
          <Container>
            {post.content.map((p, index) => (
              <p key={index} className="content-p">
                {p}
              </p>
            ))}
          </Container>
        </div>
      )}
      <Loading visible={post ? false : true} />
    </>
  );
};

export default EspacoAbertoClassPost;
