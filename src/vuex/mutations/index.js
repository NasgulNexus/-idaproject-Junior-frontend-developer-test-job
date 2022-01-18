export default {
  ADD_PRODUCT: (state, product) => {
    state.products.push(product);
  },
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  DELETE_PRODUCT: (state, id) => {
    state.products = state.products.filter(el => el.id !== id);
  }
};
