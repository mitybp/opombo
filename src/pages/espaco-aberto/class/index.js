import { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Loading from "../../../components/Loading";
import { Container } from "../../../styled";
import { useParams } from "react-router-dom";

const EspacoAbertoClass = () => {
  const { projectClass } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/espaco-aberto.json")
      .then((res) => res.json())
      .then((data) => {
        data.map((project) => {
          let projectClass = project.projectClass
            .toLowerCase()
            .replace("°", "-");
          if (projectClass == projectClass) {
            setProject(project);
          }
        });
      });
  });

  console.error = console.warn = () => {};
  document.title = "Espaço Aberto - Jornal O Pombo";
  return (
    <>
      {project && (
        <>
          <Container>
            <h1>{project.name}</h1>
            <p>{project.class}</p>
          </Container>
          <div className="project-list">
            {project.posts &&
              project.posts.map((project) => (
                <Card post={project} isProject={true} />
              ))}
          </div>
        </>
      )}
      <Loading visible={project.length === 0 ? true : false} />
    </>
  );
};

export default EspacoAbertoClass;
