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
import Sandubas from "./pages/projects/Sandubas";
import Erro404 from "./pages/Erro404";

function App() {
  if (localStorage.getItem("saved") == null)
    localStorage.setItem("saved", "[]");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:post_author/:post_title" element={<Post />} />
        <Route path="/:author_name" element={<Author />} />
        <Route path="/autores/" element={<Authors />} />
        <Route path="/salvos/" element={<Saved />} />
        <Route path="/sobre/" element={<About />} />
        <Route path="/bio/" element={<Bio />} />
        <Route path="/pesquisar/" element={<Search />} />
        <Route path="/projeto-sandubas/" element={<Sandubas/>} />
        <Route path="*" element={<Erro404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
