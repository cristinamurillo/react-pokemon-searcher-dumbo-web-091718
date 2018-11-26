import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  handleClick = () => {
    this.setState({
      front: !(this.state.front)
    })
  }

  returnSpriteImage = () => {
    if (this.state.front) {
      return this.props.pokemon.sprites.front
    } else {
      return this.props.pokemon.sprites.back
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick ={this.handleClick}>
            <img className= "tiny image" src={this.returnSpriteImage()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[this.props.pokemon.stats.length -1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
