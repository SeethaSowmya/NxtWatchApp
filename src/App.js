import './App.css'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/Login/Login'
import Home from './components/Home/Home'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/Login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
  </Switch>
)

export default App
