import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import '../css/styles/user-input.css'

const UserInput = () => {

    const [ userName, setUserName ] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        dispatch(changeUser(userName))
        navigate('/poke-dex')
    }

    return (
        <div className='container'>
            <div className='content'>
                <div className='banner'>
                    <h2 className='title'>Hello trainer!</h2>
                    <img src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="" className='image'/>
                </div>

                <div className='banner-subtitle'>
                    <p className='subtitle'>Give me your name to start.</p>
                </div>

                <form onSubmit={submit} className='form'>
                    <input 
                        type="text" 
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder='Enter your name'
                        className='input'
                    />
                    <button className='button'>
                        <i className='fas fa-paper-plane'></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserInput;