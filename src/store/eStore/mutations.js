//assign the product list to state products
export const setProducts = (state, products) => {
  state.products = products;
};

export const setProduct = (state, product) => {
  state.product = product;
};

export const setCategory = (state, category) => {
  state.categoryType = category;
};

export const AddToCart = (state, { product, quantity }) => {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  state.cart.push({ product, quantity });
};

export const removeProductFromCart = (state, product) => {
  state.cart = state.cart.filter((item) => {
    return item.product.id !== product.id;
  });
};

/////////////set Order To json server
export const setOrder = (state, payload) => {
  state.orderDetails = payload;
};