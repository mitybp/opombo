import {useState, useEffect} from 'react'
import Header from '../components/Header'
import { X } from '@phosphor-icons/react'
import Card from '../components/Card';

const Search = () => {
    const [posts, setPosts] = useState([]);
  const [inp, setInp] = useState("");
  const [byTitle, setByTitle] = useState(true);

  document.title = "Pesquisar - O Pombo Jornal";

  useEffect(() => {
    function fetchData() {
      fetch("https://opomboapi.vercel.app/app/index.json")
        .then((res) => res.json())
        .then((dt) => setPosts(dt["db"]));
    }
    fetchData();
  });
  return (
    <main>
        <Header/>
        <div className='resp-container'>
            <h1>Pesquisar</h1>
            <div>
                <div className='search-inp-container'>
                    <button
                        className='search-btn-delete'
                        onClick={()=>setInp("")}
                    ><X/></button>
                    <input
                        type="text"
                        placeholder="Pesquisar pelo título"
                        className='search-inp'
                        onChange={(e)=>setInp(e.target.value)}
                        value={inp}
                    />
                </div>
                <div style={{paddingTop: 10}}>
                    <button
                        className='search-btn-filter'
                        onClick={()=>setByTitle(!byTitle)}
                    >
                        Filtrar por {byTitle?"conteúdo":"título"}
                    </button>
                </div>
            </div>
        </div>
        <div className='card-list'>
            {
                inp ?
                posts.map(p=>{
                    if(byTitle){
                        if(p.title.toLowerCase().includes(inp.toLowerCase()))
                            return <Card post={p} />
                    }else{
                        if(p.content.toLowerCase().includes(inp.toLowerCase()))
                            return <Card post={p} />
                    }
                }) :
                "Digite algo para pesquisar"
            }
        </div>
    </main>
  )
}

export default Search