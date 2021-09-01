import React from 'react';
import pokemons from './data.js';
import Pokedex from './Pokedex.js';
import './App.css';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

}

export default App;