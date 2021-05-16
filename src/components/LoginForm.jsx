import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Auth from '../modules/auth'

const LoginForm = () => {
  const dispatch = useDispatch()
  const {errorMessage} = useSelector(state => state)

  return (
    <form data-cy="login-form" onSubmit={(event) => Auth(event, dispatch)}>
      <input data-cy="email" type="email" name="email" placeholder="Email"/>
      <input data-cy="password" type="password" name="password" placeholder="Password"/>
      <button type="submit" data-cy="login-button">
        Logga in
      </button>
      <h3 data-cy='login-message'>{errorMessage && errorMessage}</h3>
    </form>
  )
}

export default LoginForm
