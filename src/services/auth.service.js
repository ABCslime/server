import axios from 'axios';
import authHeader from './auth-header';


const API_URL = 'http://89.143.104.168:5000/api/auth/';

class AuthService {

  login(user,pass) {
    return axios
      .post(API_URL + 'signin', {
        username: user,
        password: pass,
      })
      .then(response => {
        console.log(response)
        if (response.data) {
          console.log("log in successful")
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        else console.log(response.data)

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }


  passwordReset(email) {
    return axios.post(API_URL + 'resetpassword/', null, { params: {email: email} });
  }
  changePassword(token, password) {
    return axios.post(API_URL + 'changepassword/', {password: password}, { params: {token: token} });
  }
  passwordResetProfile(oldPassword, password) {
    return axios.post(API_URL + 'changepasswordprofile/', {oldpassword: oldPassword, password: password}, { headers: authHeader() });
  }
  changeEmail(oldPassword, email) {
    return axios.post(API_URL + 'changeemail/', {oldpassword: oldPassword, email: email}, { headers: authHeader() });
  }

  confirmUserEmail(token) {
    return axios.get(API_URL + "confirm", {params: {token: token}})
  }
  makeItemLegal(id){

    let formData = new FormData();



    formData.append("id", id)
    return axios.post(API_URL + 'itemLegal' ,
      formData
    ,{ headers: authHeader() })
  }
}

export default new AuthService();
