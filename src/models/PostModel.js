import axios from 'axios'
let endpoint = `http://localhost:3001/`

class AuthModel {

    static create(newPost) {
      let request = axios.post(`${endpoint}api/posts`, newPost)
      return request
    }
}

export default AuthModel
