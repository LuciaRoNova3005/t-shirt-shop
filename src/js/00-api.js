const getApiData = () => {
  fetch("../assets/api/data.json")
    .then((response) => response.json())
    .then((data) => (products = data.cart.items));
};
