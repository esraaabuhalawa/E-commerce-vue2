import axios from "axios";

export function getProducts({ commit }) {
  axios.get('http://localhost:3000/products')
    .then(function (response) {
      commit("setProducts", response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getProduct({ commit }, productId) {
  axios.get(`http://localhost:3000/products/${productId}`)
    .then(function (response) {
      // handle success
      commit("setProduct", response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}
//Cart Add Product Action
export function addProductTOCart({ commit }, { product, quantity }) {
  commit('AddToCart', { product, quantity });
}

//Cart remove Product Action
export function removeProductFromCart({ commit }, product) {
  commit('removeProductFromCart', product)
}

export function AddOrder({ commit }, payload) {
  axios.post('http://localhost:3000/orders', {
    payload
  })
    .then(function (response) {
      commit('setOrder', response.data)
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}
