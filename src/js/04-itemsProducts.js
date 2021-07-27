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
const listenEvents = (selector, handler, eventType = "click") => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener(eventType, handler);
  }
};
