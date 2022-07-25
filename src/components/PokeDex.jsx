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
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")
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

  //Const para paginación
  const [page, setPage] = useState(1);
  const [forPage, setPorPagina] = useState(12);

  const lastPage = Math.ceil(characters.length / forPage);

  const numbers = []; // [1, 2, 3, 4]
  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }

  return (
    <div className="container-content">
      <div className="pokemon-title-container">
      <span className="content-title">P</span>
      <span className="content-title">o</span>
      <span className="content-title">k</span>
      <span className="content-title">e</span>
      <span className="content-title">D</span>
      <span className="content-title">e</span>
      <span className="content-title">x</span>
      </div>
      <p className="content-subtitle">
        Welcome <b className="user">{user}</b>, here you can find your favorite
        pokemon.
      </p>

      <div className="content-list row">
        <select className="list-pokemon col-sm-5 col-lg-6" onChange={filterName}>
          <option value="" className="options">
            All Pokemons
          </option>
          {names.map((name) => (
            <option value={name.url} key={name.url} className="options">
              {name.name}
            </option>
          ))}
        </select>
        <form className="list-search col-sm-5 col-lg-6" onSubmit={search}>
          <input
            type="text"
            placeholder="Search here..."
            value={characterSearch}
            onChange={(e) => setCharacteSearch(e.target.value)}
            className="search"
          />
        </form>
      </div>

      <div className="buttons row">
        <button className="prev" onClick={() => setPage(page - 1)} disabled={page === 1}>
          <i class="fa-solid fa-angles-left"></i>
        </button>
        {numbers.map((number) => (
          <button className="numbers-buttons" onClick={() => setPage(number)}>
            {number}
          </button>
        ))}
        <button className="next" onClick={() => setPage(page + 1)} disabled={page === lastPage}>
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>

      <ul className="content-pokemons">
        {characters
          .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
          .map((character) => (
            <CharacterItem
              key={character.url ? character.url : character.pokemon.url}
              characterUrl={
                character.url ? character.url : character.pokemon.url
              }
            />
          ))}
      </ul>
    </div>
  );
};

export default PokeDex;