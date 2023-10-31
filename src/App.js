import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/post/index.js";
import Saved from "./pages/salvos/index.js";
import About from "./pages/sobre/index.js";
import Bio from "./pages/bio/index.js";
import Search from "./pages/pesquisar/index.js";
import Erro404 from "./pages/Erro404";

function App() {
  if (localStorage.getItem("saved") == null)
    localStorage.setItem("saved", "[]");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Erro404 />} />
        <Route
          path="/materia/:post_title"
          element={<Post />}
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
        <Route path="*" element={<Erro404 />} />
        <Route path="/pagina-nao-encontrada" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
