const listenAddProductsBtns = () => {
  listenEvents(".js-add-product", incProductQuantity);
};

const listenCartBtns = () => {
  listenEvents(".js-inc-btn", incProductQuantity);
  listenEvents(".js-dec-btn", decProductQuantity);
};

const listenEvents = (selector, handler, eventType = "click") => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener(eventType, handler);
  }
};

const paintProducts = () => {
  let productsCode = "";
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
  }
  const productsElement = document.querySelector(".js-products");
  productsElement.innerHTML = productsCode;
};

const getProductHtmlCode = (product) => {
  let htmlCode = "";
  htmlCode += `<article class="card">`;
  htmlCode += `  <img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}">`;
  htmlCode += `  <h3 class="card__title3">${product.name}</h3>`;
  htmlCode += `  <p class="card__description">${product.price} €</p>`;
  htmlCode += `  <button class="js-add-product card__btn" data-id="${product.id}">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
};
