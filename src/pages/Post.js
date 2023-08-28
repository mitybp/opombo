import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ScrollIndictor from "../components/ScrollIndictor";
import Loading from "../components/Loading";
import { card_colors } from "../api";
import { Copy } from "@phosphor-icons/react";

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
      ? setMinuteRead(Math.ceil(data.content.trim().split(/\s+/).length / 200))
      : setMinuteRead(0);
  });

  document.title = data.title?`${data.title} - ${data.author} - O Pombo Jornal`:"Postagem não encontrada - O Pombo Jornal";

  return (
    <main>
      <Header />
      <ScrollIndictor color={card_colors[data.tag]} />
      {data.title !== undefined ? (
        <div>
          <div className="post-header">
            <p
              className="post-tag"
              style={{ backgroundColor: card_colors[data.tag] }}
            >
              {tagUpper[data.tag]}
            </p>
            <h1 className="post-title">{data.title}</h1>
            <p className="post-info">
              <a
                style={{ color: "#444", textDecoration: "none" }}
                href={`/${post_author}`}
              >
                {data.author}
              </a>{" "}
              ・ {data.date}・ {minuteRead} min de leitura
            </p>
            
              <button
                className="post-save post-info"
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
              </button>
          </div>
          <div className="resp-container">
            {String(data.content)
              .split("<br/>")
              .map((p) => (
                <p key={p} className="p">
                  {p}
                </p>
              ))}
            <br />
            <h2>Creditos</h2>
            {data.creditos
              ? data.creditos.map((a) => (
                  <p
                    className="creditos"
                    style={{
                      borderBottom:
                        data.creditos.indexOf(a) === data.creditos.length - 1
                          ? "none"
                          : "1px solid #ccc",
                    }}
                  >
                    {a[0]}: {a[1]}
                  </p>
                ))
              : ""}
          </div>
        </div>
      ) : (
        <div className="resp-container">
          <p>Não foi possível encontrar a postagem</p>
        </div>
      )}
      <Loading visible={data?false:true}/>
    </main>
  );
};

export default Post;
