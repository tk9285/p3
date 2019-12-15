// import React from 'react'
import getGamesByCategory from '../../services/games'



// const RPG = () => {
//     let data = getGamesByCategory(1)
//     // let games = data.category.Games
//     // console.log(games)
//     return(
//         <div>
//             {console.log("it runs!!!")}
//         </div>
//     )
// }


// export default RPG

import React, { Component } from "react";

class RPG extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: []
        }
    }

    fetchGameCats = (id) => {
        const games = getGamesByCategory(id)

        console.log(games)
        this.setState({ games: games })
    }


    render() {
        return (
            <div>
                <p>Hi</p>
                {this.fetchGameCats(1)}
            </div>
        )
    }
}

export default RPG