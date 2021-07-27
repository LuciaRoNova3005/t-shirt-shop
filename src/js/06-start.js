const incProductQuantity = (ev) => {
  const id = getClickedProductId(ev);
  if (isProductInCart(id)) {
    incCartQuantity(id);
  } else {
    addProductoToCart(id);
  }
  ensureCart();
  setInLocalStorage();
  paintCartItems();
  listenCartBtns();
};

const decProductQuantity = (ev) => {
  const id = getClickedProductId(ev);
  decCartQuantity(id);
  ensureCart();
  setInLocalStorage();
  paintCartItems();
  listenCartBtns();
};
startApp();
getApiData();
