import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios("https://fakestoreapi.com/products", {
      method: "GET"
    })
      .then(products => {
        commit("SET_PRODUCTS_TO_STATE", products.data);
        return products;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
  ADD_TO_PRODUCTS({ commit }, product) {
    commit("ADD_PRODUCT", product);
  },
  DELETE_FROM_PRODUCTS({ commit }, id) {
    commit("DELETE_PRODUCT", id);
  }
};
