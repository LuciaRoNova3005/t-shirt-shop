const getApiData = () => {
  fetch("./assets/js/api/data.json")
    .then((response) => response.json())
    .then((data) => {
      products = data.cart.items;
      console.log(products);
    });
};
