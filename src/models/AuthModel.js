import axios from 'axios'

class AuthModel {
  static login(authData){
    let request = axios.post(`http://localhost:3001/api/login`. authData)
    return request
  }
}

export default AuthModel