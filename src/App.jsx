import { HashRouter, Route, Routes } from 'react-router-dom'
import UserInput from './components/UserInput'
import PokeDex from './components/PokeDex'
import './App.css'
import CharacterDetail from './components/CharacterDetail'

function App() {

  return (
    <HashRouter>
      <div className='App'>
        <div className='pokeball-background'></div>
        <Routes>
          <Route path='/' element = {<UserInput/>}/>
          <Route path='/poke-dex' element = {<PokeDex/>}/>
          <Route path='/poke-dex/:id' element = {<CharacterDetail/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
