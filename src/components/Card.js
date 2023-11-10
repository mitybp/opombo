import { Check, BookmarkSimple } from "@phosphor-icons/react";
import { strFormat } from "../api/strFormat";
import { CardContainer, CardTag, CardTitle } from "../styled";

const Card = ({ post, isProject }) => {
  let card_tagsUpper = {
    "exposicao-artistica": "Exposição artística",
    "ciencia-e-filosofia": "Ciência e filosofia",
    eventos: "Eventos",
    noticia: "Notícia",
    "pesquisa-e-estatistica": "Pesquisa e estatística",
    "artigo-de-opiniao": "Artigo de opinião",
    "aula-de-campo": "Aula de campo",
    "contos-e-cronicas": "Contos e crônicas",
    "escola-por-dentro": "Escola Por Dentro",
  };

  let card_colors = {
    "exposicao-artistica": "#B9EDC8",
    "ciencia-e-filosofia": "#A8C6C3",
    eventos: "#E4C9A2",
    noticia: "#B9E8ED",
    "pesquisa-e-estatistica": "#FFA8B3",
    "artigo-de-opiniao": "#E6B9ED",
    "aula-de-campo": "#A8C6FF",
    "contos-e-cronicas": "#E1EDB9",
    "escola-por-dentro": "#FEE57E",
  };
  function setPostSave() {
    let saved = JSON.parse(localStorage.getItem("saved"));

    if (saved.includes(post.id)) {
      saved.splice(saved.indexOf(post.id), 1);
      localStorage.setItem("saved", JSON.stringify(saved));
    } else {
      saved.push(post.id);
      localStorage.setItem("saved", JSON.stringify(saved));
    }
  }
  return post && isProject ? (
    <CardContainer>
      <a className="title" href={`/espaco-aberto/${post.class.toLowerCase().replace("°","-")}`}>
        {post.name}
      </a>
      <div>
        <p className="infos">
          {post.class}
        </p>
      </div>
    </CardContainer>
  ) : (
    <CardContainer>
      <a className="title" href={`/materia/${strFormat(post.title)}`}>
        {post.title}
      </a>
      <div>
        <p className="infos">
          <p className="tag" style={{ backgroundColor: card_colors[post.tag] }}>
            {card_tagsUpper[post.tag]}
          </p>
          <p>
            {post.author} ・ {post.date}
          </p>
        </p>
        <button onClick={setPostSave}>
          <BookmarkSimple
            weight={
              JSON.parse(localStorage.getItem("saved")).includes(post.id)
                ? "fill"
                : "regular"
            }
          />
        </button>
      </div>
    </CardContainer>
  );
};

export default Card;
