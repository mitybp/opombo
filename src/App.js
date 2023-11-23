import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/post/index.js";
import Saved from "./pages/salvos/index.js";
import About from "./pages/sobre/index.js";
import Bio from "./pages/bio/index.js";
import Search from "./pages/pesquisar/index.js";
import Erro404 from "./pages/Erro404";
import EspacoAberto from "./pages/espaco-aberto/index.js";
import EspacoAbertoProject from "./pages/espaco-aberto/ea-project/index.js";
import EspacoAbertoProjectPost from "./pages/espaco-aberto/ea-project/ea-post/index.js";
import Header from "./components/Header.js";

function App() {
  if (localStorage.getItem("saved") == null) localStorage.setItem("saved", "[]");

  return (
    <>
    <Header/>
    <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materia/:post_title" element={<Post />} />
        <Route
          path="/espaco-aberto"
          element={<EspacoAberto />}
          errorElement={<Erro404 />}
        />
        <Route path="/espaco-aberto/:projectName/" element={<EspacoAbertoProject />} />
        <Route path="/espaco-aberto/:projectName/:postTitle" element={<EspacoAbertoProjectPost />} />
        <Route path="/salvos/" element={<Saved />} />
        <Route path="/sobre/" element={<About />} />
        <Route path="/bio/" element={<Bio />} />
        <Route path="/pesquisar/" element={<Search />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
    </main>
    </>
  );
}

export default App;
