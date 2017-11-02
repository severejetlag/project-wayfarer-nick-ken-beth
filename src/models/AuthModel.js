import axios from 'axios'

class AuthModel {
    let endpoint = `http://localhost:3001/`
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
