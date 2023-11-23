import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ArrowFatLineLeft } from "@phosphor-icons/react";
import Loading from "../components/Loading";
import { HomeDropdownButton } from "../styled";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [actTag, setActTag] = useState("Todas");
  const [dropdown, setDropdown] = useState(false);

  const colorTags = [
    ["Todas", "#F4F4F4"],
    ["Exposição artística", "#B9EDC8"],
    ["Ciência e filosofia", "#A8C6C3"],
    ["Eventos", "#E4C9A2"],
    ["Notícia", "#B9E8ED"],
    ["Pesquisa e estatística", "#FFA8B3"],
    ["Artigo de opinião", "#E6B9ED"],
    ["Aula de campo", "#A8C6FF"],
    ["Contos e crônicas", "#E1EDB9"],
    ["Escola Por Dentro", "#FEE57E"],
  ];

  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(
          data.posts[0].id === 0 ? data.posts.reverse() : data.posts
        );
        setTags(data.tags);

        let localPosts = JSON.stringify(data.posts[0].id === 0 ? data.posts.reverse() : data.posts)
        let localTags = JSON.stringify(data.tags);
        
        if(localStorage.getItem("fetchDate")!==Date.now()){
          localStorage.setItem("fetchDate", Date.now());
          localStorage.setItem("fetchPosts", localPosts);
          localStorage.setItem("fetchTags", localTags);
        }
      });
  });

  console.error = console.warn = console.info = () => {};
  document.title = "Jornal O Pombo";

  return (
    <>
      <Tabs>
        <div>
          <HomeDropdownButton onClick={() => setDropdown(!dropdown)}>
            <span
              style={{
                rotate: dropdown ? "0deg" : "180deg",
              }}
            >
              <ArrowFatLineLeft />
            </span>{" "}
            {actTag}
          </HomeDropdownButton>
        </div>
        <TabList
          style={{
            transform: dropdown ? "translateX(0)" : "translateX(-1000px)",
          }}
          className="home-tab-tags-list"
        >
          {colorTags.map((tt, index) => {
            return (
              <Tab
                key={index}
                style={{
                  backgroundColor: tt[0] === actTag ? tt[1] : "#fff",
                  borderColor: tt[0] === actTag ? tt[1] : "#ccc",
                }}
                className="home-tab-tag-btn"
                onClick={() => {
                  setActTag(tt[0]);
                  setDropdown(false);
                }}
              >
                {tt[0]}
              </Tab>
            );
          })}
        </TabList>
        <TabPanel key={0} className="home-card-list">
          {posts.map((p, index) => (
            <Card key={index} post={p} />
          ))}
        </TabPanel>
        {tags.map((tt) => {
          return (
            <TabPanel key={tags.indexOf(tt) + 1} className="home-card-list">
              {tt.ids
                .map((id, index) => (
                  <Card
                    key={index}
                    post={posts[0].id === 0 ? posts[id] : posts.reverse()[id]}
                  />
                ))
                .reverse()}
            </TabPanel>
          );
        })}
      </Tabs>
      <Loading visible={posts.length === 0 ? true : false} />
    </>
  );
};

export default Home;
