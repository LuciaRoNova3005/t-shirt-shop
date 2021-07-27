const startApp = () => {
  getApiData().then(() => {
    paintProducts();
    listenAddProductsBtns();
  });
  getFromLocalStorage();
  paintCartItems();
  listenCartBtns();
};

const getApiData = () => {
  fetch("..srcjsdata.json")
    .then((response) => response.json())
    .then((data) => (products = data.cart.items));
};
