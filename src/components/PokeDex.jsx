import React from 'react';
import { useSelector } from 'react-redux';

const PokeDex = () => {

    const user = useSelector(state => state.user)

    return (
        <div>
            <h1>PokeDex</h1>
            <p>Welcome {user}, here you can find your favorite pokemon.</p>
            
        </div>
    );
};

export default PokeDex;