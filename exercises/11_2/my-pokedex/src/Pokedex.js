import React from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render () {
    return (
    <div>
      <h1>Pokedex</h1>
      {pokemons.map((pokemon, index) => {
        return <Pokemon
        key={index}
        name={pokemon.name}
        type={pokemon.type}
        averageWeight={`${pokemon}`}
        />
      })}
    </div>
    )
  }
}

export default Pokedex
