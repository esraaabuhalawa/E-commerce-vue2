
export const products = (state) => {
  return state.products
}
export const womenProducts = (state) => {
  var womenProducts = state.products.filter(product => {
    return product.category == "Women";
  })
  return womenProducts
}
export const menProducts = (state) => {
  var menProducts = state.products.filter(product => {
    return product.category == "Men";
  })
  return menProducts
}
export const exclusiveProducts = (state) => {
  var exclusiveProducts = state.products.filter(product => {
    return product.category == "Exclusive";
  })
  return exclusiveProducts
}
export const discountProducts = (state) => {
  var discountProducts = state.products.filter(product => {
    return product.discountPercent != 0;
  })
  return discountProducts
}
export const cartItemCount = (state) => {
  return state.cart.length
}
export const cartTotalPrice = (state) => {
  let total = 0;
  state.cart.forEach(item => {
    total += item.product.priceAfterDiscount * item.quantity
  })
  return total;
}