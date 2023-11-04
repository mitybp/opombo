import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ScrollIndictor from "../../components/ScrollIndictor";
import Loading from "../../components/Loading";
import {
  PostHeader,
  PostTag,
  PostButton,
  PostTitle,
  PostInfo,
  Container,
  PostCredit,
  PostShareBar,
  PostGoTopButton,
} from "../../styled";
import {
  CaretUp,
  Copy,
  TwitterLogo,
  WhatsappLogo,
  Check,
  CaretLeft,
} from "@phosphor-icons/react";
import Text2Speech from "../../components/Text2Speech";
import { strFormat } from "../../api/strFormat";

const Post = () => {
  const { post_title } = useParams();
  const [tagUpper, setTagUpper] = useState({});
  const [data, setData] = useState({});
  const [minuteRead, setMinuteRead] = useState(0);
  const [copied, setCopied] = useState(false);
  const [postsLength, setPostsLength] = useState(0);
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

    if (saved.includes(data.id)) {
      saved.splice(saved.indexOf(data.id), 1);
      localStorage.setItem("saved", JSON.stringify(saved));
    } else {
      saved.push(data.id);
      localStorage.setItem("saved", JSON.stringify(saved));
    }
  }

  function copyShareLink() {
    navigator.clipboard.writeText(
      `${data.title}, por ${data.author} - O Pombo Jornal. https://opombo.page.link/${data.id}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  }


  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/posts.json")
      .then((res) => res.json())
      .then((dt) => {
        setTagUpper(dt["tagsUpper"]);
        setPostsLength(dt["posts"].length);
        dt["posts"].map((p) => {
          if (strFormat(p.title) === post_title) {
            setData(p);
          }
        });
      });

    data.content
      ? setMinuteRead(
          Math.ceil(data.content.toString().trim().split(/\s+/).length / 200)
        )
      : setMinuteRead(0);
  });

  document.title = data.title
    ? `${data.title} - ${data.author} - O Pombo Jornal`
    : "Postagem não encontrada - O Pombo Jornal";

  return (
    <main>
      <Header />
      <ScrollIndictor color={card_colors[data.tag]} />
      {data.title !== undefined ? (
        <div>
          <PostHeader>
            <PostTag style={{ backgroundColor: card_colors[data.tag] }}>
              {tagUpper[data.tag]}
            </PostTag>
            <PostTitle>{data.title}</PostTitle>
            <PostInfo>
              {data.author} ・ {data.date}・ {minuteRead} min de leitura
            </PostInfo>
            <PostInfo>
              <PostButton onClick={setPostSave}>
                {JSON.parse(localStorage.getItem("saved")).includes(data.id)
                  ? "Remover dos salvos"
                  : "Salvar matéria"}
              </PostButton>
              <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                <Text2Speech
                  text={
                    data.title + ", por" + data.author + ". " + data.content
                  }
                />
                <PostShareBar>
                  <button title="Copiar link" onClick={copyShareLink}>
                    {copied ? <Check /> : <Copy />}
                  </button>
                  <a
                    title="Compartilhar no Twitter"
                    target="_blank"
                    href={`http://twitter.com/intent/tweet?text=${data.title}, por ${data.author} - O Pombo Jornal. https://opombo.page.link/${data.id}`}
                  >
                    <TwitterLogo />
                  </a>
                  <a
                    title="Compartilhar no WhatsApp"
                    target="_blank"
                    href={`http://api.whatsapp.com/send?text=${data.title}, por ${data.author} - O Pombo Jornal. https://opombo.page.link/${data.id}`}
                  >
                    <WhatsappLogo />
                  </a>
                </PostShareBar>
              </div>
            </PostInfo>
          </PostHeader>
          <Container>
            {data.content.map((p, i) => (
              <p key={i} className="content-p">
                {p}
              </p>
            ))}
            <br />
            <h2>Créditos</h2>
            {data.creditos
              ? data.creditos.map((a) => (
                  <PostCredit key={a[0]}>
                    {a[0]}: {a[1]}
                  </PostCredit>
                ))
              : ""}
            <PostGoTopButton
              href="#"
              style={{ display: window.scrollY >= 80 ? "flex" : "none" }}
            >
              <CaretUp />
            </PostGoTopButton>
          </Container>
        </div>
      ) : (
        <div className="resp-container">
          <p>Não foi possível encontrar a postagem</p>
        </div>
      )}
      <Loading visible={data ? false : true} />
    </main>
  );
};

export default Post;
