const listenAddProductsBtns = () => {
  const productsBtns = document.querySelectorAll(".js-add-product");
  for (const productBtn of productsBtns) {
    productBtn.addEventListener("click", ADPRODUCT);
  }
};
