import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  ResponsiveContainer,
  InputElement,
  LabelItem,
  Button,
  Logo,
  Massage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    checked: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    console.log(jwtToken)

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  UpdateUsername = event => {
    this.setState({username: event.target.value})
  }

  CheckBoxUpdate = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  UpdatePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showSubmitError, checked, errorMsg} = this.state
    const passwordText = checked ? 'text' : 'password'
    return (
      <ResponsiveContainer>
        <LoginContainer onSubmit={this.submitForm}>
          <div>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
            />
          </div>
          <br />
          <LabelItem htmlFor="userInput">USERNAME</LabelItem>
          <InputElement
            type="text"
            id="userInput"
            value={username}
            onChange={this.UpdateUsername}
            placeholder="Username"
          />
          <br />
          <LabelItem htmlFor="password">PASSWORD</LabelItem>
          <InputElement
            type={passwordText}
            id="password"
            value={password}
            onChange={this.UpdatePassword}
            placeholder="Username"
          />
          <br />
          <div>
            <input
              type="checkBox"
              id="checkbox"
              checked={checked}
              onChange={this.CheckBoxUpdate}
            />
            <LabelItem htmlFor="checkbox"> Show Password</LabelItem>
          </div>
          <Button type="submit">Login</Button>
          {showSubmitError && <Massage>{errorMsg}</Massage>}
        </LoginContainer>
      </ResponsiveContainer>
    )
  }
}

export default LoginForm
