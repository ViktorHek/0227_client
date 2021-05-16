import axios from 'axios'

const Auth = async (event, dispatch) => {
  event.preventDefault()
  let credentials = {
    email: event.target.email.value,
    password: event.target.password.value,
  }
  try {
    let response = await axios.post('/auth/sign_in', credentials)
    let userData = {
      uid: response.headers['uid'],
      client: response.headers['client'],
      access_token: response.headers['access-token'],
      token_type: 'Bearer',
      expiry: response.headers['expiry'],
    }
    localStorage.setItem("credentials", JSON.stringify(userData))
    dispatch({
      type: "SET_CURRENT_USER",
      payload: userData
    })
  } 
  catch (error) {
    alert("You Shall Not Pass!!")
  }
}

export default Auth