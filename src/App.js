import './App.css';
import HeaderText from './components/HeaderText';
import React, { useState, useEffect } from 'react';
import PokemonListView from './components/PokemonListView';
import { PokemonDataContext } from './PokemonDataContext';

function App() {
  const [pokemons, setData] = useState([]);
  useEffect(() => {
    fetch('https://uyghur.ai/course/data/pokemon.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <PokemonDataContext.Provider value={pokemons}>
      <div className="App">
        <HeaderText />
        <PokemonListView />
      </div>
    </PokemonDataContext.Provider>
  );
}

export default App;
