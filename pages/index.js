import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function Index(props) {
    var [url, setUrl] = useState(props.url);
    var [name, setName] = useState(props.name);
    async function changePoke() {
        let id = Math.round(Math.random() * 500);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const { data } = res;
        setUrl(data.sprites.front_default);
        setName(data.species.name);
    }
    return (
        <div>
            <h1>hello next.js</h1>
            <div><img src={url} alt="pokemon"></img></div>
            <Link href={`/poke?name=${name}`} as={`pokeinfo/${name}`}>{name}</Link>
            <br></br>
            <br></br>
            <button onClick={changePoke}>get a new poke</button>
        </div>
    )
}

Index.getInitialProps = async (ctx) => {
    let id = Math.round(Math.random() * 500);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { data } = res;
    return { url: data.sprites.front_default, name: data.species.name };
};

export default Index;