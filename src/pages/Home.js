import { useEffect, useState } from "react";
import Header from "../components/Header";
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
  const [colorTags, setLinkTags] = useState([]);


  useEffect(() => {
    fetch("https://opomboapi.vercel.app/db/posts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(
          data["posts"][0].id === 0 ? data["posts"].reverse() : data["posts"]
        );
        setTags(data["tags"]);
        setLinkTags(data["colorTags"]);
      });
  });

  console.error = console.warn = () => {};
  document.title = "Jornal O Pombo";

  return (
    <main>
      <Header />
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
            transform: dropdown ? "translateX(0)" : "translateX(-500px)",
          }}
          className="home-tab-tags-list"
        >
          {colorTags.map((tt) => {
            return (
              <Tab
                key={tt[0]}
                style={{
                  backgroundColor: tt[0] === actTag ? tt[1] : "#fff",
                  borderColor: tt[0] === actTag ? tt[1] : "#ccc",
                }}
                className="home-tab-tag-btn"
                onClick={() => {setActTag(tt[0]); setDropdown(false)}}
              >
                {tt[0]}
              </Tab>
            );
          })}
        </TabList>
        <TabPanel key={0} className="home-card-list">
          {posts.map((p) => (
            <Card key={p.id} post={p} />
          ))}
        </TabPanel>
        {tags.map((tt) => {
          return (
            <TabPanel key={tags.indexOf(tt) + 1} className="home-card-list">
              {tt.ids
                .map((id) => (
                  <Card
                    key={id}
                    post={posts[0].id === 0 ? posts[id] : posts.reverse()[id]}
                  />
                ))
                .reverse()}
            </TabPanel>
          );
        })}
      </Tabs>
      <Loading visible={posts.length === 0 ? true : false} />
    </main>
  );
};

export default Home;
