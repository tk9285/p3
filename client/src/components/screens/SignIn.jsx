import React, { Component } from 'react'
import { signInUser } from '../../services/auth'
import {NavLink} from 'react-router-dom'
import Footer from '../shared/Footer'
import './styles/signin-up.css'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      isError: false,
      errorMsg: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ''
    })
  }

  onSignIn = event => {
    event.preventDefault()

    const { history, setUser } = this.props
    signInUser(this.state)
    .then(res => setUser(res.user))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({
          isError: true,
          errorMsg: 'Invalid Credentials',
          username: '',
          password: ''
        })
      })
  }

  renderError = () => {
    const toggleForm = this.state.isError ? 'danger' : ''
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      )
    } else {
      return <button type="submit" className='sign-button'>Sign In</button>
    }
  }

  render() {
    const { username, password } = this.state

    return (
      <div className='multi-container'>
      <div className="form-box">
          <h3 className>Sign In</h3>
          <form onSubmit={this.onSignIn} className='form-container'>
         
            <label>Username</label>
            <input
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            {this.renderError()}
            
          </form>
          <NavLink to="/sign-up">
            <p>Don't have an account?</p>
          </NavLink>
        </div>

        <Footer/>
</div>
        
    )
  }
}

export default SignIn