const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart.some((cartItem) => (cartItem.id.toString() === item.id.toString()))){
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    alert('Ya agregaste este producto al carrito');
  }
}

const getCart = () => {
  return JSON.parse(localStorage.getItem('cart'));
}

const deleteItem = (item) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const itemPosition = cart.findIndex((cartItem) => (cartItem.id.toString() === item.id.toString()));
  cart.splice(itemPosition, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
}

const getTotal = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const total = cart.reduce((acum, { price }) => {
    return acum + parseInt(price);
  }, 0);

  return total;
}

export {
  addToCart,
  getCart,
  getTotal,
  deleteItem
}