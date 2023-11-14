import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Loading from "../../../components/Loading";
import { Container } from "../../../styled";
import { useParams } from "react-router-dom";
import { strFormat } from "../../../api/strFormat";

const EspacoAbertoProject = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/espaco-aberto.json")
      .then((res) => res.json())
      .then((data) => {
        data.map((p) => {
          if (strFormat(p.name) === projectName) {
            setProject(p);
          }
        });
      });
  });

  // console.error = console.warn = () => {};
  document.title = project
    ? `${project.name}, ${project.class} - Espaço Aberto - Jornal O Pombo`
    : "";
  return (
    <>
      {project && (
        <div>
          <Container>
            <a href="/espaco-aberto">Espaço Aberto</a>
            <h1>{project.name}</h1>
            <p>{project.class}</p>
          </Container>
          <div className="project-list">
            {project.posts &&
              project.posts.map((post) => (
                <Card
                  post={{ ...post, name: project.name }}
                  isProject={true}
                  isProjectPost={true}
                  key={post.id}
                />
              ))}
          </div>
        </div>
      )}
      <Loading visible={project ? false : true} />
    </>
  );
};

export default EspacoAbertoProject;
