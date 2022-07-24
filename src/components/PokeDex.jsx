import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CharacterItem from "./CharacterItem";
import { useNavigate } from "react-router-dom";
import "../css/styles/poke-dex.css";

const PokeDex = () => {
  const [characters, setCharactes] = useState([]);
  const [names, setNames] = useState([]);
  const [characterSearch, setCharacteSearch] = useState("");

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) =>
        setCharactes(
          response.data.results.filter((pokemon) =>
            pokemon.name.includes(characterSearch)
          )
        )
      );

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((response) => setNames(response.data.results));
  }, [characterSearch]);

  const search = (e) => {
    e.preventDefault();
    navigate(`/poke-dex/:${characterSearch}`);
  };

  const filterName = (e) => {
    axios
      .get(e.target.value)
      .then((response) => setCharactes(response.data.pokemon));
  };

  return (
    <div className="container-content">
      <span className="content-title">P</span>
      <span className="content-title">o</span>
      <span className="content-title">k</span>
      <span className="content-title">e</span>
      <span className="content-title">D</span>
      <span className="content-title">e</span>
      <span className="content-title">x</span>

      <p className="content-subtitle">
        Welcome <b className="user">{user}</b>, here you can find your favorite
        pokemon.
      </p>

      <div className="content-list">
        <select className="list-pokemon" onChange={filterName}>
          <option value="" className="options">
            All Pokemons
          </option>
          {names.map((name) => (
            <option value={name.url} key={name.url} className="options">
              {name.name}
            </option>
          ))}
        </select>
        <form className="list-search" onSubmit={search}>
          <input
            type="text"
            placeholder="Search here..."
            value={characterSearch}
            onChange={(e) => setCharacteSearch(e.target.value)}
            className="search"
          />
          <button className="search-button">Search</button>
        </form>
      </div>

      <ul className="content-pokemons">
        {characters.map((character) => (
          <CharacterItem
            key={character.url ? character.url : character.pokemon.url}
            characterUrl={character.url ? character.url : character.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default PokeDex;
