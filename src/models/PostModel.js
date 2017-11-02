import axios from 'axios'

class AuthModel {
    let endpoint = `http://localhost:3001/`
    static create(post) {
      let request = axios.post(`${endpoint}posts`)
      return request
    }
}

export default AuthModel
