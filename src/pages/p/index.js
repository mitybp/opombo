import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { Container, CardList, CardSimple } from "../../styled";
import { useParams } from "react-router-dom";

const P = () => {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch("https://opomboapi.vercel.app/app/index.json")
            .then((res) => res.json())
            .then((dt) => {
                dt["db"][0]["id"] === 0
                    ? setPosts(dt["db"].reverse())
                    : setPosts(dt["db"]);
            });
    });

    document.title = "P - O Pombo Jornal";
    return posts ?
        posts.map(p => {
            p.id === id ?
                document.location.pathname = p.path :
                ""
        }) :
        ""
};

export default P;
