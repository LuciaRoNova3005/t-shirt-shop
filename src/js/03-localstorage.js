const getFromLocalStorage = () => {
  const localStorageCart = localStorage.getItem("cart");
  if (localStorageCart !== null) {
    cart = JSON.parse(localStorageCart);
  }
};

const setInLocalStorage = () => {
  const stringifyCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyCart);
};
