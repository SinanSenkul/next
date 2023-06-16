//import { useRouter } from "next/router"; --> if we use router for using query params
import React, { useState } from "react";
import axios from "axios";

function Poke(props) {
    //const router = useRouter(); --> if we use router for using query params
    //const {name} = router.query --> if we use router for using query params
    const name = props.name; // but we used getinitialprops to server render things.
    const ability = props.ability;
    const weight = props.weight;
    var [url, setUrl] = useState(props.url);
    return (
        <div>
            <h3>{name}</h3>
            <img src={url} alt="pokemon"></img>
            <p>ability: {ability}</p>
            <p>weight: {weight}</p>
        </div>
    )
}

Poke.getInitialProps = async ({ query }) => {
    const { name } = query;
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    //console.log('link:'+ `https://pokeapi.co/api/v2/pokemon/${name}`)
    const { data } = res;
    return { name, url: data.sprites.front_default, ability:data.abilities[0].ability.name, weight:data.weight }
}

export default Poke;