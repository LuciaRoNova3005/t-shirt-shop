const getCartItemHtmlCode = (item) => {
  let htmlCode = "";
  htmlCode += `<tr>`;
  htmlCode += `  <td>${item.name}</td>`;
  htmlCode += `  <td>${item.price}</td>`;
  htmlCode += `  <td>`;
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
  let htmlCode = "";
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

const getTotalPrice = () => {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
};

const paintCartItems = () => {
  const cartElement = document.querySelector(".js-cart");
  cartElement.innerHTML = "";
  for (const item of cart) {
    cartElement.innerHTML += getCartItemHtmlCode(item);
  }
  cartElement.innerHTML += getCartTotalHtmlCode();
  listenCartBtns();
};

const listenAddProductsBtns = () => {
  listenEvents(".js-add-product", incProductQuantity);
};

const listenCartBtns = () => {
  listenEvents(".js-inc-btn", incProductQuantity);
  listenEvents(".js-dec-btn", decProductQuantity);
};
