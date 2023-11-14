import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import { Container } from "../../styled";

const EspacoAberto = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/espaco-aberto.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data[0].id === 0 ? data.reverse() : data);
      });
  });

  console.error = console.warn = () => {};
  document.title = "Espaço Aberto - Jornal O Pombo";

  return (
    <>
      <Container>
        <h1>Espaço Aberto</h1>
      </Container>
      <div className="project-list">
        {projects &&
          projects.map((project, index) => (
            <Card post={project} isProject={true} key={index} />
          ))}
      </div>
      <Loading visible={projects.length === 0 ? true : false} />
    </>
  );
};

export default EspacoAberto;
