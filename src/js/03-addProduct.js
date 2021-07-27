const listenAddProductsBtns = () => {
  const productsBtns = document.querySelectorAll(".js-add-product");
  for (const productBtn of productsBtns) {
    productBtn.addEventListener("click", incProductQuantity);
  }
};
const incProductQuantity = (ev) => {
  const clickedId = ev.target.dataset.id;

  let foundItem = findInArray(clickedId, cart);
  if (foundItem === undefined) {
    let foundProduct = findInArray(clickedId, products);

    cart.push({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
      quantity: 1,
    });
  } else {
    foundItem.quantity += 1;
  }

  setInLocalStorage();
  paintCartItems();
};
const decProductQuantity = (ev) => {
  const clickedId = ev.target.dataset.id;

  let foundItem = findInArray(clickedId, cart);

  if (foundItem.quantity > 1) {
    foundItem.quantity -= 1;
  } else {
    let foundIndex = findIndexInArray(clickedId, cart);

    cart.splice(foundIndex, 1);
  }

  setInLocalStorage();
  paintCartItems();
};
