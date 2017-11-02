import axios from 'axios'
let endpoint = `http://localhost:3001/`

class AuthModel {

    static create(post) {
      let request = axios.post(`${endpoint}posts`)
      return request
    }
}

export default AuthModel
