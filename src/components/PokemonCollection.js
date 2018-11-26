import React, {PureComponent} from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends PureComponent {


  render() {
    let pokemonCards = this.props.pokemon.map(pokeObj => {
      return <PokemonCard pokemon={pokeObj} />
    })
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {pokemonCards}
      </Card.Group>
    )
  }


}

export default PokemonCollection
