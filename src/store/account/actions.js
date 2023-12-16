
import axios from "axios";

export async function setUserData({ commit }, { email, pass, userName }) {
  try {
    const response = await axios.post('http://localhost:3000/users/', {
      email: email,
      password: pass,
      username: userName
    });
    commit('setUserData', response);

  } catch (error) {
    alert(error)
  }
}


export async function login({ commit }, { email, pass }) {
  const response = await axios.get(`http://localhost:3000/users/?email=${email}&password=${pass}`)
  // handle success
  if (response.data.length > 0) {
    commit('getUserData', response.data[0]);
    commit('loginError', '');
    commit('isAuth', true)
  }
  else {
    commit('loginError', 'Email or Password does not match');
  }

}

