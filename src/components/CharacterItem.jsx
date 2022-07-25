import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/styles/character-item.css'

const CharacterItem = ({ characterUrl }) => {

    const [ character, setCharacter ] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(characterUrl)
             .then(response => setCharacter(response.data))
    }, [])

    return (
        <div className="content-pokemons row">
        <div className='card col-sm-1 col-lg-3' onClick={() => navigate(`/poke-dex/${character.id}`)}>
            <h3 className='card-title'>{character.name}</h3>
            <div className='content-card'>
                <div className='card-content'>
                    <div className='card-types'>
                        <p className='type'>Types:</p>
                        {
                            character.types?.map(type => (
                                <p className='type-name'>{type.type.name}{''}</p>
                            ))
                        }
                    </div>
                    <div className='card-stats'>
                        <p className='stat-name'>{character.stats?.[0].stat.name}:</p>
                        <p className='stat'>{character.stats?.[0].base_stat}</p>
                    </div>
                    <div className='card-stats'>
                        <p className='stat-name'>{character.stats?.[1].stat.name}:</p>
                        <p className='stat'>{character.stats?.[1].base_stat}</p>
                    </div>
                    <div className='card-stats'>
                        <p className='stat-name'>{character.stats?.[2].stat.name}:</p>
                        <p className='stat'>{character.stats?.[2].base_stat}</p>
                    </div>
                    <div className='card-stats'>
                        <p className='stat-name'>{character.stats?.[5].stat.name}:</p>
                        <p className='stat'>{character.stats?.[5].base_stat}</p>
                    </div>
                </div>
                <div className='card-img'>
                    <div className='background'>
                        <img src={character.sprites?.front_default} alt="" className='img'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CharacterItem;