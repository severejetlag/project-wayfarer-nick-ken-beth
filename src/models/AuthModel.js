import axios from 'axios'
let endpoint = `http://localhost:3001/`

class AuthModel {
  	static login(authData){
    	let request = axios.post(`${endpoint}login`, authData)
    	return request
  	}
  	static signup(authData){
  		let request = axios.post(`${endpoint}signup`, authData)
  		return request
  	}
  	static logout(){
  		let request	= axios.get(`${endpoint}logout`)
  		return request
  	}
}

export default AuthModel
