import React from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render () {
    return (
      <div>
        <h1 class='title'>POKEDEX</h1>
        <div class='other'>
        {pokemons.map((pokemon, index) => {
          return <Pokemon
            key={index}
            name={pokemon.name}
            type={pokemon.type}
            weightValue={pokemon.averageWeight.value}
            weightUnit={pokemon.averageWeight.measurementUnit}
            image={pokemon.image}
          />
        })}
        </div>
      </div>
    )
  }
}


export default Pokedex
