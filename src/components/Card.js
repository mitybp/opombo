import { strFormat } from "../api/strFormat";
import { card_colors, card_tagsUpper } from "../api";

const Card = ({ post }) => {
  return (
    <div className="card">
      <p className="card-tag" style={{ backgroundColor: card_colors[post.tag] }}>
        {card_tagsUpper[post.tag]}
      </p>
      <a
        className="card-title"
        href={`/${strFormat(post.author)}/${strFormat(post.title)}`}
      >
        {post.title}
      </a>
      <p>
        <a
          className="link_gray"
          href={`/${strFormat(post.author)}`}
        >
          {post.author}
        </a>{" "}
        ・ {post.date}
      </p>
    </div>
  );
};

export default Card;
