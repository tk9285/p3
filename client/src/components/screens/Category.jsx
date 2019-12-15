import React from 'react'
import { getGamesByCategory } from '../../services/games'
import '../screens/styles/category.css'
class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game: []
        }
    }

    componentDidMount = () => {
        this.fetchGameCategory(this.props.match.params.id)


    }

   
    fetchGameCategory = async (id) => {
        const games = await getGamesByCategory(id)

        this.setState({ game: games.category.Games })
        console.log(this.state.game[0])
    }

    renderGames = () => {
        return this.state.game.map((game) => {

            return (
                    <div className='game-sizing'>
                    <li key ={game.id}>
                    <li className='game-cover'>
                        <img src={game.url}></img>
                    </li>
                    <li className='game-title'>
                        <h1>{game.title}</h1>
                    </li>
                    </li>
                    <button onClick={this.handleClick} className='heart'>
                </button>
                </div>
            )
        })

    }

    render() {
        return (
            <>
                <h6 className='title-page'>
                    Click on any game to like it and link to your account
                </h6>
                {/* <h5>{category.title}</h5> */}
                 <ul className='list-style'>

                {
                    this.renderGames()
                }
                </ul>
                {/* <div class="area-sports" >
            <ul class="circles">
                <img src='https://pngimage.net/wp-content/uploads/2018/06/x-button-playstation-png-3.png'></img>
                <img src='https://pngimage.net/wp-content/uploads/2018/06/ps4-button-png-3.png'></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/PlayStationTriangle.svg/1229px-PlayStationTriangle.svg.png'></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/PlayStation_button_X.svg/1024px-PlayStation_button_X.svg.png'></img>
                <img src=''></img>
                <img src=''></img>
                <img src=''></img>
                <img src=''></img>

            </ul>
        </div> */}
            </>
        )
    }
}

export default Category