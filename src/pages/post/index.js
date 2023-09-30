import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import ScrollIndictor from "../../components/ScrollIndictor";
import Loading from "../../components/Loading";
import { card_colors } from "../../api";
import {
  PostHeader,
  PostTag,
  PostButton,
  PostTitle,
  PostInfo,
  Container,
  PostCredit,
  Button,
  PostShareBar,
  PostGoTopButton,
} from "../../styled";
import {
  CaretUp,
  Copy,
  FacebookLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Text2Speech from "../../components/Text2Speech";

const Post = () => {
  const { post_author, post_title } = useParams();
  const [tagUpper, setTagUpper] = useState({});
  const [data, setData] = useState({});
  const [minuteRead, setMinuteRead] = useState(0);

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => {
          setTagUpper(dt["tags-upper"]);
          dt["db"].map((p) => {
            if (p.path === `/${post_author}/${post_title}`) {
              setData(p);
            }
          });
        });
    }

    fetchData();

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
              <a
                style={{ color: "#444", textDecoration: "none" }}
                href={`/cargos/redacao/${post_author}`}
              >
                {data.author}
              </a>{" "}
              ・ {data.date}・ {minuteRead} min de leitura
            </PostInfo>
            <PostInfo>
              <PostButton
                onClick={() => {
                  if (localStorage.getItem("saved") == null)
                    localStorage.setItem("saved", "[]");
                  let saved = JSON.parse(localStorage.getItem("saved"));

                  if (saved.includes(data.id)) {
                    saved.splice(saved.indexOf(data.id), 1);
                    localStorage.setItem("saved", JSON.stringify(saved));
                  } else {
                    saved.push(data.id);
                    localStorage.setItem("saved", JSON.stringify(saved));
                  }
                }}
              >
                {JSON.parse(localStorage.getItem("saved")).includes(data.id)
                  ? "Remover dos salvos"
                  : "Salvar matéria"}
              </PostButton>
              <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                <Text2Speech
                  text={data.title + ", por" + data.author + ". " + data.content}
                />
                <PostShareBar>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`https://opombo.page.link/${data.id}`);
                      alert("Copiado para a área de transferência!");
                    }}
                  >
                    <Copy />
                  </button>
                  <a
                    target="_blank"
                    href={`http://twitter.com/intent/tweet?text=${data.title}, por ${data.author} - O Pombo Jornal. https://opombo.page.link/${data.id}`}
                  >
                    <TwitterLogo />
                  </a>
                  <a
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
            {data.content.map((p) => (
              <p key={p} className="content-p">
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
            <PostGoTopButton href="#" style={{ display: window.scrollY >= 80 ? "flex" : "none" }}>
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
