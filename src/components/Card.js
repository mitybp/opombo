import { strFormat } from "../api/strFormat";
import { CardContainer, CardTag, CardTitle } from "../styled";

const Card = ({ post }) => {
  let card_tagsUpper = {
    "exposicao-artistica": "Exposição artística",
    "ciencia-e-filosofia": "Ciência e filosofia",
    eventos: "Eventos",
    noticia: "Notícia",
    "pesquisa-e-estatistica": "Pesquisa e estatística",
    "artigo-de-opiniao": "Artigo de opinião",
    "aula-de-campo": "Aula de campo",
    "contos-e-cronicas": "Contos e crônicas",
    "escola-por-dentro": "Escola Por Dentro"
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
    "escola-por-dentro": "#FEE57E"
  };
  return post? (
    <CardContainer>
      <CardTag style={{ backgroundColor: card_colors[post.tag] }}>
        {card_tagsUpper[post.tag]}
      </CardTag>
      <CardTitle href={`/materia/${strFormat(post.title)}`}>
        {post.title}
      </CardTitle>
      <p>{post.author} ・ {post.date}</p>
    </CardContainer>
  ):"";
};

export default Card;
