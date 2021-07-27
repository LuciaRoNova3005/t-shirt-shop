const startApp=()=>{getApiData().then(()=>{paintProducts(),listenAddProductsBtns()}),getFromLocalStorage(),paintCartItems(),listenCartBtns()},getApiData=()=>{fetch("https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json").then(t=>t.json()).then(t=>products=t.cart.items),console.log(data)};let product=[],cart=[];const paintProducts=()=>{let t="";for(const a of products)t+=getProductHtmlCode(a);document.querySelector(".js-products").innerHTML=t},getProductHtmlCode=t=>{let a="";return a+='<article class="card">',a+=`  <img src="${t.imageUrl}" class="card__img" alt="Producto: ${t.name}">`,a+=`  <h3 class="card__title">${t.name}</h3>`,a+=`  <p class="card__description">${t.price} €</p>`,a+=`  <button class="js-add-product card__btn" data-id="${t.id}">Añadir a la cesta</button>`,a+="</article>",a},getClickedProductId=t=>t.target.dataset.id,ensureCart=()=>{cart=cart.filter(t=>t.quantity>0)},addProductoToCart=t=>{const a=products.find(a=>a.id===t);cart.push({id:a.id,name:a.name,price:a.price,quantity:1})},incCartQuantity=t=>{cart.find(a=>a.id===t).quantity+=1},decCartQuantity=t=>{cart.find(a=>a.id===t).quantity-=1},isProductInCart=t=>!!cart.find(a=>a.id===t),paintCartItems=()=>{const t=document.querySelector(".js-cart");t.innerHTML="";for(const a of cart)t.innerHTML+=getCartItemHtmlCode(a);t.innerHTML+=getCartTotalHtmlCode()},getCartItemHtmlCode=t=>{let a="";return a+="<tr>",a+=`  <td>${t.name}</td>`,a+=`  <td>${t.price}</td>`,a+="  <td>",a+=`    <button class="js-dec-btn card__btn" data-id="${t.id}">-</button>`,a+="    "+t.quantity,a+=`    <button class="js-inc-btn card__btn" data-id="${t.id}">+</button>`,a+="  </td>",a+=`  <td class="text-align-right">${t.price*t.quantity}€</td>`,a+="</tr>",a},getCartTotalHtmlCode=()=>{let t="";return t+='<tr class="text--bold">',t+="  <td>Total</td>",t+=`  <td colspan="3" class="text-align-right">${cart.reduce((t,a)=>t+a.price*a.quantity,0)}€</td>`,t+="</tr>",t},listenEvents=(t,a,e="click")=>{const r=document.querySelectorAll(t);for(const t of r)t.addEventListener(e,a)},getFromLocalStorage=()=>{const t=localStorage.getItem("cart");null!==t&&(cart=JSON.parse(t),paintCartItems())},setInLocalStorage=()=>{const t=JSON.stringify(cart);localStorage.setItem("cart",t)},incProductQuantity=t=>{const a=getClickedProductId(t);isProductInCart(a)?incCartQuantity(a):addProductoToCart(a),ensureCart(),setInLocalStorage(),paintCartItems(),listenCartBtns()},decProductQuantity=t=>{const a=getClickedProductId(t);decCartQuantity(a),ensureCart(),setInLocalStorage(),paintCartItems(),listenCartBtns()};getApiData().then(()=>{paintProducts(),listenAddProductsBtns()}),getFromLocalStorage(),paintCartItems(),listenCartBtns(),getApiData(),console.log(">> Ready :)");