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
  fetch(".js/api/data.json")
    .then((response) => response.json())
    .then((data) => (products = data.cart.items));
  console.log(data);
};
