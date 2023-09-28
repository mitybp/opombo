import "./App.css";
import { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/post/index.js";
import Saved from "./pages/salvos/index.js";
import About from "./pages/sobre/index.js";
import Bio from "./pages/bio/index.js";
import Search from "./pages/pesquisar/index.js";
import Erro404 from "./pages/Erro404";
import DoceSolidario from "./pages/doce-solidario/index.js";
import Blog from "./pages/blog/index.js";
import Cargos from "./pages/cargos/index.js";
import Cargo from "./pages/cargos/cargo/index.js";
import Pessoa from "./pages/cargos/cargo/pessoa/index.js";
import Galeria from "./pages/galeria";
import Interclasse from "./pages/interclasse";
import Equipe from "./pages/equipe";

function App() {
  if (localStorage.getItem("saved") == null)
    localStorage.setItem("saved", "[]");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Erro404 />} />
        {/* Páginas não estáticas */}
        <Route
          path="/:post_author/:post_title"
          element={<Post />}
          errorElement={<Erro404 />}
        />
        {/* Páginas estáticas */}
        <Route
          path="/cargos/"
          element={<Cargos />}
          errorElement={<Erro404 />}
        />
        <Route
          path="/cargos/:cargo"
          element={<Cargo />}
          errorElement={<Erro404 />}
        />
        <Route
          path="/cargos/:cargo/:nome"
          element={<Pessoa />}
          errorElement={<Erro404 />}
        />
        <Route
          path="/interclasse"
          element={<Interclasse />}
          errorElement={<Erro404 />}
        />
        <Route path="/salvos/" element={<Saved />} errorElement={<Erro404 />} />
        <Route
          path="/galeria/"
          element={<Galeria />}
          errorElement={<Erro404 />}
        />
        <Route path="/equipe" element={<Equipe/>} errorElement={<Erro404/>} />
        <Route path="/sobre/" element={<About />} errorElement={<Erro404 />} />
        <Route path="/bio/" element={<Bio />} errorElement={<Erro404 />} />
        <Route
          path="/pesquisar/"
          element={<Search />}
          errorElement={<Erro404 />}
        />
        {/* Projetos */}
        <Route
          path="/projeto-doce-solidario/"
          element={<DoceSolidario />}
          errorElement={<Erro404 />}
        />
        {/* Blog */}
        <Route path="/blog" element={<Blog />} errorElement={<Erro404 />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="/pagina-nao-encontrada" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
