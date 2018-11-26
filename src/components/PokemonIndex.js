import React, {PureComponent} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends PureComponent {

  state = {
    searchValue: "",
    pokemon: []
  }

  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value
    })

    this.doFetch()

  }

  doFetch = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(fetchedPokemon => {
      this.setState({
        pokemon: this.filterPokemon(fetchedPokemon)
      })
    })
  }

  filterPokemon(fetchedPokemon){
    let filteredPoke = fetchedPokemon.filter(pokemon => {
      return pokemon.name.includes(this.state.searchValue)
    })
    return filteredPoke
  }

  componentDidMount(){
    this.doFetch()
  }



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemon ={this.state.pokemon}/>
        <br />
        <PokemonForm doFetch={this.doFetch}/>
      </div>
    )
  }
}

export default PokemonPage
