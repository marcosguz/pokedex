import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import '../css/styles/character-detail.css'

const CharacterDetail = () => {

    const [ character, setCharacter ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
             .then(response => setCharacter(response.data))
    }, [])

    console.log(character)

    return (
        <div className='character-detail'>
            <div className="character-content">
                <div className='character-button'>
                    <button className='button-icon'>
                        <i class="icon fa-solid fa-arrow-left"></i>
                    </button>
                </div>
                <div className="character-logo"></div>
                
                <div className="characters">
                    <div className="card-pokemon">
                        <div className='pokemon'>
                            <img src={character.sprites?.other.dream_world.front_default} alt="" className='pokemon-img'/>
                            <div className="pokemon-info">
                                <div className="info">
                                    <div className="weight">
                                        <p className='number'>{character.weight}</p>
                                        <p className='text'>Weight</p>
                                    </div>
                                    <div className="height">
                                        <p className='number'>{character.height}</p>
                                        <p className='text'>Height</p>
                                    </div>
                                </div>

                                
                                <h3 className='info-name'>{character.name}</h3>

                                <div className="pokemon-id">
                                    <span>#:</span>
                                    <span>{character.id}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card-type-abilities">
                            <div className="type">
                                <h3 className='type-name'>Type</h3>
                                <ul className='item'>
                                    {
                                        character.types?.map(type => (
                                            <li key={type.type.name} className='list'>
                                                {type.type.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="abilities">
                                <h3 className='type-name'>Abilities</h3>
                                <ul className='item'>
                                    {
                                        character.abilities?.map(ability => (
                                            <li key={ability.ability.name} className='list'>
                                                {ability.ability.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="stats">
                            <h3 className='stat-name'>Stats Base</h3>
                            <div className="hp">
                                <div className="hp-name">
                                    <p>HP:</p>
                                </div>
                                <div className="background-hp">
                                    <div className="percentaje">
                                        {character.stats?.[0].base_stat}
                                    </div>
                                </div>
                            </div>

                            <div className="speed">
                                <div className="speed-name">
                                    <p>Speed:</p>
                                </div>
                                <div className="background-speed">
                                    {character.stats?.[5].base_stat}
                                </div>
                            </div>

                            <div className="attack">
                                <div className="attack-name">
                                    <p>Attack:</p>
                                </div>
                                <div className="background-attack">
                                    {character.stats?.[1].base_stat}
                                </div>
                            </div>

                            <div className="defense">
                                <div className="defense-name">
                                    <p>Defense:</p>
                                </div>
                                <div className="background-defense">
                                    {character.stats?.[2].base_stat}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pokemon-movements">
                        <div className="encounters">

                        </div>
                        <div className="movements">
                            <h3 className='movements-title'>Movements</h3>
                            <ul className='items'>
                                {
                                    character.moves?.map(movement => (
                                        <li key={movement.move.name} className='movements-item'>{movement.move.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;