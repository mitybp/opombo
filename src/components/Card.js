import { strFormat } from "../api/strFormat";
import { card_colors, card_tagsUpper } from "../api";
import { CardContainer, CardTag, CardTitle } from "../styled";

const Card = ({ post }) => {
  return (
    <CardContainer>
      <CardTag style={{ backgroundColor: card_colors[post.tag] }}>
        {card_tagsUpper[post.tag]}
      </CardTag>
      <CardTitle
        href={`/${strFormat(post.author)}/${strFormat(post.title)}`}
      >
        {post.title}
      </CardTitle>
      <p>
        <a
          style={{color: '#222', textDecoration: 'none'}}
          href={`/${strFormat(post.author)}`}
        >
          {post.author}
        </a>{" "}
        ・ {post.date}
      </p>
    </CardContainer>
  );
};

export default Card;
