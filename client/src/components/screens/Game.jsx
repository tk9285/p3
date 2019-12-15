import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { getGameById, deleteGame } from '../../services/games'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: null,
      deleted: false
    }
  }

  async componentDidMount() {
    try {
      const game = await getGameById(this.props.match.params.id)
      this.setState({ game })
    } catch (err) {
      console.error(err)
    }
  }

  destroy = () => {
    deleteGame(this.state.game.id)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render() {
    const { game, deleted } = this.state

    if (!game) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return (
        <Redirect
          to={{
            pathname: '/games',
            state: { msg: 'Game succesfully deleted!' }
          }}
        />
      )
    }

    return (
        <div className="game">
          <Link to="/games">
            <span> Back to all games</span>
          </Link>
          <h4>{game.title}</h4>
          <p>Link: {game.link}</p>
          <div className="buttons">
            <button className="danger" onClick={this.destroy}>
              Delete Item
            </button>
            <button
              className="edit"
              onClick={() =>
                this.props.history.push(
                  `/games/${this.props.match.params.id}/edit`
                )
              }
            >
              Edit
            </button>
          </div>
        </div>
    )
  }
}

export default Game
