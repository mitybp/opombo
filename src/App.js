import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";
import Author from "./pages/Author";
import Authors from "./pages/Authors";
import Saved from "./pages/Saved";
import About from "./pages/About";
import Bio from "./pages/Bio";
import Search from "./pages/Search";
import Erro404 from "./pages/Erro404";
import DoceSolidario from "./pages/DoceSolidario";
import Blog from "./pages/Blog";

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
        <Route
          path="/:author_name"
          element={<Author />}
          errorElement={<Erro404 />}
        />
        {/* Páginas estáticas */}
        <Route
          path="/autores/"
          element={<Authors />}
          errorElement={<Erro404 />}
        />
        <Route path="/salvos/" element={<Saved />} errorElement={<Erro404 />} />
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
        <Route
          path="/blog"
          element={<Blog/>}
          errorElement={<Erro404/>}
        />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
