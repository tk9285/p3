import React, { Component } from "react";
import axios from "axios";
import './styles/favorites.css'
import Footer from "./../shared/Footer";
import { getFavorites } from "./../../services/favorites";
import { getGames, deleteGame, createGame } from "../../services/games";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: [{}],
      /// have to figure out how to import user object from login
      user: 5,
      games: [{}]
    };
  }

  async componentDidMount(props) {
    try {
      const favs = await axios(
        `http://localhost:3000/api/users/5/favorites`
      );
      this.setState({ favs: favs.data.favs });
      console.log(favs);

      const games = await axios(
        `http://localhost:3000/api/games`
      );
      console.log(games)
      this.setState({ games: games.data.games });


      //   console.log(response.data.favs);
    } catch (err) {
      console.error(err);
    }
  }

  async getGames() {
    try {
      const response = await axios(
        `http://localhost:3000/games/`);
      console.log(response.data);
      return (response)
    } catch (err) {
      console.error(err);
    }
  }

  destroy = (id) => {
    deleteGame(id)
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render() {

    const data = this.state.favs && this.state.favs.map((fav) => {
      return this.state.games && this.state.games.map((game) => {
        if (game.id === fav.gameId) {

          return <div>
            <div className="favorite_container">{game.title}
              <img className='game_img' src={game.url} ></img>
              <button onClick={() => this.destroy(game.id)}>Delete</button>
            </div>
          </div>
        }

      })

    })
    console.log('data', data)
    return (
      <div>
        <h1>Dolly's Favorites:</h1>
        {data}
      </div>
    );
  }
}



//    async getGames(id) {
//     console.log("here", id);

//       return(
//       const response = await axios(`http://localhost:3000/api/games/${id}`)
//         console.log(response)
//       )
    //     return 1
      // //   this.setState({ games: response.data})
      //   console.log(response)
      // //   console.log(response.data.favs)