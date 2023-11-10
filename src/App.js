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
import EspacoAbertoClass from "./pages/espaco-aberto/class/index.js";
import EspacoAbertoClassPost from "./pages/espaco-aberto/class/post/index.js";
import Header from "./components/Header.js";

function App() {
  if (localStorage.getItem("saved") == null)
    localStorage.setItem("saved", "[]");

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
        <Route path="/espaco-aberto/:project-class/" element={<EspacoAbertoClass />} />
        <Route path="/espaco-aberto/:project-class/:post-title" element={<EspacoAbertoClassPost />} />
        <Route path="/salvos/" element={<Saved />} />
        <Route path="/sobre/" element={<About />} />
        <Route path="/bio/" element={<Bio />} />
        <Route path="/pesquisar/" element={<Search />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="/pagina-nao-encontrada" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
    </main>
    </>
  );
}

export default App;
