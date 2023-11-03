# 📓 E-Commerce Project

- [Prevue](https://js-documentation-ecom-project.netlify.app/)
- [Source Code](../Project/eCom/)

****
****
****

**Using methods in this project.**

- Create Products Data
- Render Products
- Add to cart products
- Click end show product image
- Remove cart products
- Search products
- Alert popup message
- Theme change end theme set local storage
- Single page Navigation

## 📌 Single Page Navigation (Without Reload Page Change)

#### 🔺 `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E-com</title>
  <link rel="stylesheet" href="./styles/style.css">
</head>

<body>
  <nav>
    <div>
      <h3>My E-Commerce</h3>
    </div>      
    
    <ul>
      <li class="link" onclick="singlePage('products')" id="default">Products</li>
      <li class="link" onclick="singlePage('cart')">Cart</li>
    </ul>    
  </nav>

  <main>
    <section class="container" id="products">
      <h1>Products Page</h1>
    </section>

    <section class="container" id="cart">
      <h1>Cart Page</h1>
    </section>
  </main>
  
  <script src="./js/script.js"></script>
</body>

</html>
```

#### 🔺 `script.js`

```js
document.getElementById("default").click()
function singlePage(pageName) {
  let link = document.querySelectorAll(".link")
  let container = document.querySelectorAll(".container")

  for (let int = 0; int < container.length; int++) {
    container[int].style.display = "none"
  }
  document.getElementById(pageName).style.display = "block"

  for (let int = 0; int < link.length; int++) {
    link[int].classList.add("navLink")
    link[int].classList.remove("active")
  }
  document.querySelector(`[onclick="singlePage('${pageName}')"]`).classList.add("active")
}
```

#### 🔺 `style.css`

```css
.navLink {
  color: var(--black);
}

.active {
  color: var(--nav-color);
  font-weight: bold;
}
```

## 📌 Change Theme with localStorage

#### 🔺 `index.html`

**Link Stylesheet in html**

- **darkTheme.css** is default
- **lightTheme.css** is toggle change

```html
<head>
  <!-- Theme CSS -->
  <link rel="stylesheet" href="./styles/darkTheme.css" id="changeStyle">
  <link rel="stylesheet" href="./styles/style.css">
</head>
```

- toggle switch

```html
<div class="themeBtn" onclick="toggleTheme()">
  <div id="themeIcon"></div>
</div>
```

#### 🔺 `darkTheme.css end lightTheme.css`

**darkTheme.css**

```css
:root {
  --black: black;
  --white: white;
  --nav-color: brown;
  --nav-bg: #9b9b9b;
  --productsCardBg: #3b3b3b;
  --delPrice: gray;
  --addToCartBtnBg: #add8e6;
  --removeCartBtnBg: tomato;
  --alertPopupBg: tomato;
  --successPopupBg: lightgreen;
}
```

**lightTheme.css**

```css
:root {
  --black: white;
  --white: black;
  --nav-color: lightblue;
  --nav-bg: #03006b;
  --productsCardBg: #b9b9b9;
  --delPrice: #5f5f5f;
  --addToCartBtnBg: #3535ff;
  --removeCartBtnBg: tomato;
  --alertPopupBg: tomato;
  --successPopupBg: lightgreen;
}
```

#### 🔺 `script.js`

```js
let changeStyle = document.getElementById("changeStyle")
let themeIcon = document.getElementById("themeIcon")
themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
function toggleTheme() {
  if (changeStyle.getAttribute("href") === "./styles/darkTheme.css") {
    changeStyle.setAttribute("href", "./styles/lightTheme.css")
    themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>'

    // Set theme in localStorage
    localStorage.setItem("theme", "light")
  } else {
    changeStyle.setAttribute("href", "./styles/darkTheme.css")
    themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'

    // Set theme in localStorage
    localStorage.setItem("theme", "dark")
  }
}

//! getItem in localStorage
const storageTheme = localStorage.getItem("theme")
if (storageTheme === "light") {
  changeStyle.setAttribute("href", "./styles/lightTheme.css")
  themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>'
} else {
  changeStyle.setAttribute("href", "./styles/darkTheme.css")
  themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
}
```

## 📌 Create Products in Array Object

#### 🔺 `products.js`

```js
const earbud = [
  {
    id: 1,
    title:
      "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, IPX4 Water Resistance, ENx Tech, IWP, Smooth Touch Controls(Cyan Cider)",
    img: "https://m.media-amazon.com/images/I/31BMd11KciL._SY300_SX300_.jpg",
    img2: "https://m.media-amazon.com/images/I/51IIMMnQ7cL._SY450_.jpg",
    img3: "https://m.media-amazon.com/images/I/81NXl8ObnEL._SY450_.jpg",
    img4: "https://m.media-amazon.com/images/I/71Dbhs4BLZL._SY450_.jpg",
    img5: "https://m.media-amazon.com/images/I/71DxKhGrLuL._SY450_.jpg",
    price: 4490,
    discount: 78,
    qty: 1,
    category: "earbud",
  },
  {
    id: 2,
    title:
      "CrossBeats Newly launched Revolt Hybrid Active Noise Cancelling Wireless Bluetooth Earbuds, 48hrs Playtime TWS, 10 mm Ti-Alloy Driver, EchoBlast™, 40ms Low Latency Earphone-Black",
    img: "https://m.media-amazon.com/images/I/61J9BzebDnL._SY450_.jpg",
    img2: "https://m.media-amazon.com/images/I/61f1IQifWXL._SY450_.jpg",
    img3: "https://m.media-amazon.com/images/I/61axYGTUdVL._SY450_.jpg",
    img4: "https://m.media-amazon.com/images/I/81o04TvhnIL._SY450_.jpg",
    img5: "https://m.media-amazon.com/images/I/61t9SMyZ9aL._SY450_.jpg",
    price: 9999,
    discount: 75,
    qty: 1,
    category: "earbud",
  },
  {
    id: 3,
    title:
      "OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)",
    img: "https://m.media-amazon.com/images/I/51ws0E8cnbL._SL1500_.jpg",
    img2: "https://m.media-amazon.com/images/I/51ws0E8cnbL._SL1500_.jpg",
    img3: "https://m.media-amazon.com/images/I/51gX3E0vzjL._SL1500_.jpg",
    img4: "https://m.media-amazon.com/images/I/41-vUVwh5VL._SL1500_.jpg",
    img5: "https://m.media-amazon.com/images/I/51PDeyFzo1L._SL1500_.jpg",
    price: 2999,
    discount: 7,
    qty: 1,
    category: "earbud",
  }
];

const tshirt = [
  {
    id: 101,
    title: `Allen Solly Men's Regular Fit Polo`,
    img: "https://m.media-amazon.com/images/I/71eUwDk8z+L._UY879_.jpg",
    img2: "https://m.media-amazon.com/images/I/71mh8ZJZFuL._UX569_.jpg",
    img3: "https://m.media-amazon.com/images/I/71vSLpVgZpL._UX569_.jpg",
    img4: "https://m.media-amazon.com/images/I/71J8pbcn8WL._UX569_.jpg",
    img5: "https://m.media-amazon.com/images/I/71Xu6C8X5sL._UX569_.jpg",
    price: 1099,
    discount: 47,
    qty: 1,
    category: "tshirt",
  },
  {
    id: 102,
    title: `Veirdo Polo T Shirts for Men, Cotton Polo Neck T Shirts for Men, Half Sleeves Men Polo Tshirt, Classic Polo T Shirts for Men, Men's Regular Polo Shirt`,
    img: "https://m.media-amazon.com/images/I/51lP3VinwoL._UY879_.jpg",
    img2: "https://m.media-amazon.com/images/I/313gxA5aDLL._SR38,50_.jpg",
    img3: "https://m.media-amazon.com/images/I/51p4Lh0xBBL._UX569_.jpg",
    img4: "https://m.media-amazon.com/images/I/61b610JzsZL._UX569_.jpg",
    img5: "https://m.media-amazon.com/images/I/512nCuSkPvL._UX679_.jpg",
    price: 1199,
    discount: 68,
    qty: 1,
    category: "tshirt",
  },
  {
    id: 103,
    title: `AUSK Men's Henley Neck Full Sleeves Regular Fit Cotton T-Shirts`,
    img: "https://m.media-amazon.com/images/I/7152RCSU4LL._UX569_.jpg",
    img2: "https://m.media-amazon.com/images/I/61sN03JSBVL._UX569_.jpg",
    img3: "https://m.media-amazon.com/images/I/61sJSqUbdIL._UX569_.jpg",
    img4: "https://m.media-amazon.com/images/I/61orVltZ7aL._UX569_.jpg",
    img5: "https://m.media-amazon.com/images/I/512nCuSkPvL._UX679_.jpg",
    price: 1449,
    discount: 76,
    qty: 1,
    category: "tshirt",
  }
];
```

#### 🔺 `index.html`

```html
  <!-- link products.js -->
  <script src="./js/products.js"></script>
  <script src="./js/script.js"></script>
</body>
```

## 📌 Render Products

#### 🔺 `index.html`

```html
<main>
  <section class="container" id="products">
    <!-- Products render here! -->
    <div id="hereRenderProducts"></div>
  </section>

  <section class="container" id="cart">
    <h1>Cart Page</h1>
  </section>
</main>
```

#### 🔺 `script.js`

```js
let hereRenderProducts = document.getElementById("hereRenderProducts")
const productsData = [...earbud, ...tshirt]
let renderProducts = ""
productsData.forEach((x) => {
  renderProducts += `
    <div class="productCard">
      <div class="productImage">
        ${/* showProductsImageFunction() :- Click end show product image */}        
        <img src="${x.img}" onclick="showProductImageFunction(${x.id})" />
      </div>
      <div class="productDetail">
        <div>
          <p>${x.title}</p>
        </div>
        <div class="productPrice">          
          <div>
            <p>            
              <span><del>${x.price}/-</del></span>
              <span>${x.discount}% Off</span>
              <span>${x.price - Math.round((x.price * x.discount) / 100)}/-</span>
            </p>
          </div>
          ${/* addToCart() :- product add to cart method */}
          <div class="addToCartBtn" onclick="addToCart(${x.id})">
            <div>Add Cart</div>
          </div>
        </div>
      </div>
    </div>
  `
})
hereRenderProducts.innerHTML = renderProducts
```

## 📌 Click end show product image

#### 🔺 `index.html`

**Define bottom closing element.**

```html
<div class="showProductImage">
  <div id="cancelBtn"><i class="fa-solid fa-xmark"></i></div>
  <div class="productImageChild"><img src="" id="setProductImage"></div>
</div>
```

#### 🔺 `style.css`

```css
.showProductImage {
  display: none;
  z-index: 20;
  position: fixed;
  background-color: var(--black);
  top: 0;
  height: 100vh;
  width: 100%;
}

.ActiveProductsImage {
  display: block;
}

#cancelBtn {
  position: absolute;
  right: 0;
  margin: 15px;
  font-size: 35px;
  cursor: pointer;
}

#cancelBtn:active {
  scale: .9;
}

.productImageChild {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  height: 100vh;
}

.productImageChild>img {
  width: 700px;
}
```

#### 🔺 `script.js`

```js
let setProductImage = document.getElementById("setProductImage")
let cancelBtn = document.getElementById("cancelBtn")
let showProductImage = document.querySelector(".showProductImage")

cancelBtn.addEventListener("click", () => {
  showProductImage.classList.remove("ActiveProductsImage")
})

function showProductImageFunction(id) {
  let productImage = productsData.find(x => x.id == id)
  setProductImage.src = productImage.img
  showProductImage.classList.add("ActiveProductsImage")
}
```

## 📌 Add to Cart & popup alert message

#### 🔺 `index.html`

**Add to Cart element**

```html
<main>
  <section class="container" id="products">
    <div id="hereRenderProducts"></div>
  </section>

  <section class="container" id="cart">
    <!-- add to cart here! -->
    <div id="cartDataRender"></div>
  </section>
</main>
```

- **Popup element**

**Define bottom closing element.**

```html
<div class="popup"></div>
```

#### 🔺 `style.css`

- **popup css**

```css
.popup {
  position: fixed;
  bottom: 10px;
  right: -1000px;
  padding: 10px;
  border: 2px dashed var(--black);
  border-radius: 10px;
  transition: .5s ease-in;
  opacity: .8;
}

.alertPopup {
  right: 10px;
  background-color: var(--alertPopupBg);
}

.successPopup {
  right: 10px;
  background-color: var(--successPopupBg);
}
```

#### 🔺 `script.js`

```js
let cartDataRender = document.getElementById("cartDataRender")
const cartData = []

function addToCart(id) {
  let findData = productsData.find(state => state.id == id)
  let pushData = cartData.find(state => state.id == id)

  // get popup class
  let popup = document.querySelector(".popup")

  if (pushData) {

    // popup alert message
    popup.innerHTML = "<h3>Product Already Added</h3>"
    popup.classList.add("alertPopup")
    setTimeout(() => popup.classList.remove("alertPopup"), 2000)
  } else {
    cartData.push(findData)
  }

  let renderData = cartData.map(x => {
    return `
      <div class="productCard">
        <div class="productImage">
          <img src="${x.img}" />
        </div>
        <div class="productDetail">
          <div>
            <p>${x.title}</p>
          </div>
          <div class="productPrice">          
            <div>
              <p>            
                <span><del>${x.price}/-</del></span>
                <span>${x.discount}% Off</span>
                <span>${x.price - Math.round((x.price * x.discount) / 100)}/-</span>
              </p>
            </div>
            <div class="removeCartBtn" onclick="removeCart(${x.id})">
              <div>Remove</div>
            </div>
          </div>
        </div>
      </div> 
    `
  })

  cartDataRender.innerHTML = renderData.join("")
}
```

## Remove cart & popup success message

#### 🔺 `script.js`

```js
function removeCart(id) {
  let findCartData = cartData.findIndex(x => x.id == id)
  let popup = document.querySelector(".popup")

  if (!findCartData) {
    cartData.splice(findCartData, 1)

    // popup success message
    popup.innerHTML = "<h3>Remove Product</h3>"
    popup.classList.add("successPopup")
    setTimeout(() => popup.classList.remove("successPopup"), 2000)
  }

  let renderData = cartData.map(x => {
    return `
      <div class="productCard">
        <div class="productImage">
          <img src="${x.img}" />
        </div>
        <div class="productDetail">
          <div>
            <p>${x.title}</p>
          </div>
          <div class="productPrice">          
            <div>
              <p>            
                <span><del>${x.price}/-</del></span>
                <span>${x.discount}% Off</span>
                <span>${x.price - Math.round((x.price * x.discount) / 100)}/-</span>
              </p>
            </div>
            <div class="removeCartBtn" onclick="removeCart(${x.id})">
              <div>Remove</div>
            </div>
          </div>
        </div>
      </div> 
    `
  })

  cartDataRender.innerHTML = renderData.join("")
}
```

## 📌 Search Method

#### 🔺 `index.html`

```html
<div class="Search">
  <div class="SearchParent">
    <input type="text" placeholder="Search..." id="searchInput">
    <div class="magnifyingIcon" onclick="enterSearch()">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
</div>
```

#### 🔺 `style.css`

```css
.Search {
  display: flex;
  align-items: center;
  margin: 0 30px;
}

.SearchParent {
  position: relative;
}

.magnifyingIcon {
  position: absolute;
  right: 5px;
  top: 0;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
}

.magnifyingIcon:active {
  scale: .9;
}

.SearchParent>input {
  height: 30px;
  font-size: 18px;
  border-radius: 10px;
  padding: 0px 30px 0 5px;
  background-color: transparent;
  color: var(--black);
  border: 3px inset var(--black);
}

.activeSearchInput {
  display: block;
  width: 100%;
}
```

#### 🔺 `script.js`

```js
let searchInput = document.getElementById("searchInput")

function enterSearch() {
  let inputValue = searchInput.value
  let productSearched = productsData.filter(item => item.title.toUpperCase().includes(inputValue.toUpperCase()))
  console.log(productSearched);

  const SearchedResult = productSearched.map((x) => {
    return `
      <div class="productCard">
        <div class="productImage">
          <img src="${x.img}" onclick="showProductImageFunction(${x.id})" />
        </div>
        <div class="productDetail">
          <div>
            <p>${x.title}</p>
          </div>
          <div class="productPrice">          
            <div>
              <p>            
                <span><del>${x.price}/-</del></span>
                <span>${x.discount}% Off</span>
                <span>${x.price - Math.round((x.price * x.discount) / 100)}/-</span>
              </p>
            </div>
            <div class="addToCartBtn" onclick="addToCart(${x.id})">
              <div>Add Cart</div>
            </div>
          </div>
        </div>
      </div>
    `
  })
  hereRenderProducts.innerHTML = SearchedResult.join("")
}
```

****
****
****