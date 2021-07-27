const getClickedProductId = (ev) => ev.target.dataset.id;

const ensureCart = () => {
  cart = cart.filter((item) => item.quantity > 0);
};

const addProductoToCart = (id) => {
  const product = products.find((item) => item.id === id);
  cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
  });
};

const incCartQuantity = (id) => {
  const item = cart.find((item) => item.id === id);
  item.quantity += 1;
};

const decCartQuantity = (id) => {
  const item = cart.find((item) => item.id === id);
  item.quantity -= 1;
};

const isProductInCart = (id) => {
  return !!cart.find((item) => item.id === id);
};
