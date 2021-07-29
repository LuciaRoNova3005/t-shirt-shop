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

const paintCartItems = () => {
  const cartElement = document.querySelector(".js-cart");
  cartElement.innerHTML = "";
  for (const item of cart) {
    cartElement.innerHTML += getCartItemHtmlCode(item);
  }
  cartElement.innerHTML += getCartTotalHtmlCode();
};

const getCartItemHtmlCode = (item) => {
  let htmlCode = "";
  htmlCode += `<tr>`;
  htmlCode += `  <td>${item.name}</td>`;
  htmlCode += `  <td>${item.price}</td>`;
  htmlCode += `  <td class="button_shop">`;
  htmlCode += `    <button class="js-dec-btn card__btn" data-id="${item.id}">-</button>`;
  htmlCode += `    ${item.quantity}`;
  htmlCode += `    <button class="js-inc-btn card__btn" data-id="${item.id}">+</button>`;
  htmlCode += `  </td>`;
  htmlCode += `  <td class="text-align-right">${
    item.price * item.quantity
  }€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

const getCartTotalHtmlCode = () => {
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  let htmlCode = "";
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${total}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

// api

const getApiData = () => {
  return fetch("./api/data.json")
    .then((response) => response.json())
    .then((data) => (products = data.cart.items));
};
