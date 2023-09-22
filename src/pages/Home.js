import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Loading from "../components/Loading";
import { HomeDivisor, HomeDropdownButton } from "../styled";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [actTag, setActTag] = useState("Todas");
  const [dropdown, setDropdown] = useState(true);
  const [link_tags, setLinkTags] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => {
          setPosts(dt["db"][0].id === 0 ? dt["db"].reverse() : dt["db"]);
          setTags(dt["tags"]);
          setLinkTags(dt["link_tags"]);
        });
    }

    fetchData();
  });

  console.error = console.warn = () => {};
  document.title = "Jornal O Pombo";

  return (
    <main>
      <Header />
      <Tabs>
        <div>
          <HomeDropdownButton onClick={() => setDropdown(!dropdown)}>
            {dropdown ? <CaretUp /> : <CaretDown />} {actTag}
          </HomeDropdownButton>
        </div>
        <TabList
          style={{ display: dropdown ? "flex" : "none" }}
          className="home-tab-tags-list"
        >
          {link_tags.map((tt) => {
            return (
              <Tab
                key={tt[0]}
                style={{
                  backgroundColor: tt[0] === actTag ? tt[1] : "transparent",
                  borderColor: tt[0] === actTag ? tt[1] : "#ccc",
                }}
                className="home-tab-tag-btn"
                onClick={() => setActTag(tt[0])}
              >
                {tt[0]}
              </Tab>
            );
          })}
        </TabList>
        <HomeDivisor />

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
