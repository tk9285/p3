import React, { Component } from 'react'
import Header from '../screens/Header'
import Routes from '../routes/routes'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      items: []
    }
  }


  // async componentDidMount() {
  //   try {
  //     const items = await getItems()
  //     this.setState({ items })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // addItem = item => this.setState({ items: [...this.state.items, item] })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { user } = this.state
    return (
      <>
      <Header user={user}/>
        <main className="container">
          <Routes
            user={user}
            setUser={this.setUser}
            clearUser={this.clearUser}
          />
        </main>
      </>
    )
  }
}
