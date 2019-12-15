import React, { Component } from "react";
// import api from './../../services/apiConfig'
import axios from "axios";
import {postFavorite } from '../../services/favorites'
import '../screens/styles/games.css'
export default class Games extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // user: props.user.id,
      user: 4,
      games: [{}],
      favorites: {
          userId: 0,
          gameId: 0
        },
      }
    // const { history, setUser } = this.props
    console.log('top:', props.user)
    // console.log('top:'props.user.id)
  }

  async componentDidMount() {
    try {
      const response = await axios(
        `http://localhost:3000/api/games`
      )
      // console.log(response)
      this.setState({ games: response.data.games })
    } catch (err) {
      console.error(err)
    }
  }

  handleClick = (e)  => {
    console.log(e)
    e.preventDefault()
    // console.log('evalue', e.target.value)
    // console.log('user', this.state.user)

    
    // this.setState({favorites: {gameId: e.target.value, userId: this.state.user}})
    // console.log(this.favorites)
    postFavorite(e.target.value, this.state.user)
  }

  render() {
      const test = this.props
      console.log("PROPS", test)
        return (
          <ul className='list-style'>
            {this.state.games.map(game => (
              <div className='game-sizing'>
                <li key={game.id}> 
                <li className='game-cover'>{game.url}</li>
                <li className='game-title'> {game.title}</li>
               
                </li>
                <button value={game.id} onClick={(e)=>this.handleClick(e)} className='heart'>
                </button>
              </div>
            ))}
          </ul>
        );
      }
    }

