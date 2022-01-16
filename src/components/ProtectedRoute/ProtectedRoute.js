import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const status = Cookies.get('jwt_token')
  console.log(status)
  if (status === undefined) {
    return <Redirect to="/Login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
