import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem";
import '../css/styles/poke-dex.css'

const PokeDex = () => {
  const [characters, setCharactes] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => setCharactes(response.data.results));
  }, []);

  return (
    <div className="container-content">
        
      <h1 className="content-title">PokeDex</h1>
      <p className="content-subtitle">Welcome <b className="user">{user}</b>, here you can find your favorite pokemon.</p>

      <div className="content-list">
        <div className="list-pokemon">All pokemons</div>
        <div className="list-search">
            <input type="text" placeholder="Search here..." className="search"/>
            {/* <button className="button-search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button> */}
        </div>
      </div>

      <ul className="content-pokemons">
        {characters.map((character) => (
          <CharacterItem key={character.url} characterUrl={character.url} />
        ))}
      </ul>
    </div>
  );
};

export default PokeDex;
