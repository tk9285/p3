import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllCategories } from '../../services/games'
import '../screens/styles/categories.css'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount = () => {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    const categories = await getAllCategories()
    this.setState({
      categories: categories.categories
    })

  }

  renderCategories = () => {
    console.log(this.state.categories)

    return this.state.categories.map((category) => {
      return (<NavLink to={`/category/${category.id}`}> {category.title} </NavLink>)
    })
  }

  render() {
    return (
      <div>
        <div className='categories-nav-container'>
        {this.renderCategories()}
        </div>

        <div className='road-top'>
          <div className='lines1'></div>
          <img className = 'yoshi' src='https://cdn.pixilart.com/photos/orginal/a8bbc4882a797d2.gif'></img>
          <img className='sonic' src='https://media0.giphy.com/media/9KawrQzIwdAYg/giphy.gif'></img>
          <img className='mega-man' src='https://i.imgur.com/QYkc7D1.gif'></img>

        </div>
        <div className='grass'></div>
        <div className='road-bottom'>
        <img className = 'mario' src='http://www.gamesonomy.com/publications/357681/image.jpg'></img>
          <img className = 'toad' src='https://twibbon.blob.core.windows.net/twibbon/2016/175/b49e6aec-8c90-4c5c-9607-173530faf12f.png'></img>
          <div className='lines2'></div>
         
        </div>
      </div>
    )
  }
}

export default Categories