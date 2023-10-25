# 📓 E-Commerce

## 📌 Create single page navigation

`**index.html**`

```html
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
    <h2>Products page</h2>
  </section>

  <section class="container" id="cart">
    <h2>Cart page</h2>
  </section>
</main>
```

`**script.js**`

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
    link[int].style.color = "white"
  }
  document.querySelector(`[onclick="singlePage('${pageName}')"]`).style.color = "tomato"
}
```

## 📌 Theme change end set localStorage

- create `dark.css` end `light.css`
- using variable to global theme change.

`**dark.css**`

```css
:root {
  --black: black;
  --white: white;
  --nav-color: brown;
  --nav-bg: #9b9b9b;
}
```

`**light.css**`

```css
:root {
  --black: white;
  --white: black;
  --nav-color: lightblue;
  --nav-bg: #03006b;
}
```

`**index.html**`

```html
<link rel="stylesheet" href="./styles/darkTheme.css" id="changeStyle">
```

```html
<div class="themeBtn" onclick="toggleTheme()">
  <div id="themeIcon"></div>
</div>
```

`**script.js**`

```js
let changeStyle = document.getElementById("changeStyle")
let themeIcon = document.getElementById("themeIcon")
themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
function toggleTheme() {
  if (changeStyle.getAttribute("href") === "./styles/darkTheme.css") {
    changeStyle.setAttribute("href", "./styles/lightTheme.css")
    themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>'

    // setItem in localStorage
    localStorage.setItem("theme", "light")
  } else {
    changeStyle.setAttribute("href", "./styles/darkTheme.css")
    themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'

    // setItem in localStorage
    localStorage.setItem("theme", "dark")
  }
}

// getItem in localStorage
const storageTheme = localStorage.getItem("theme")
if (storageTheme === "light") {
  changeStyle.setAttribute("href", "./styles/lightTheme.css")
  themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>'
} else {
  changeStyle.setAttribute("href", "./styles/darkTheme.css")
  themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
}
```

**single page change style with theme**

```js
document.getElementById("default").click()
function singlePage(pageName) {
  let link = document.querySelectorAll(".link")
  let container = document.querySelectorAll(".container")

  for (let int = 0; int < container.length; int++) {
    container[int].style.display = "none"
  }
  document.getElementById(pageName).style.display = "block"

  /* ----- */
  for (let int = 0; int < link.length; int++) {
    link[int].classList.add("navLink")
    link[int].classList.remove("active")
  }
  document.querySelector(`[onclick="singlePage('${pageName}')"]`).classList.add("active")
  /* ----- */
}
```

`**style.css**`

```css
.navLink {
  color: var(--black);
}

.active {
  color: var(--nav-color);
  font-weight: bold;
}
```

## 📌 create products array object

- create new file `**products.js**`

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
]
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
]
```

- link script in `**index.html**`

```html
  /* ----- */
  <script src="./js/products.js"></script>
  /* ----- */
  <script src="./js/script.js"></script>
</body>
```

## 📌 Render Products

`**index.html**`

```html
<main>
  <section class="container" id="products">
    <!-- ----- -->
    <div id="hereRenderProducts"></div>
    <!-- ----- -->
  </section>

  <section class="container" id="cart">
    <h2>Cart page</h2>
  </section>
</main>
```

`**script.js**`

```js
let hereRenderProducts = document.getElementById("hereRenderProducts")
const productsData = [...earbud]
let renderProducts = ""
productsData.forEach((x) => {
  renderProducts += `
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
          <div class="addToCartBtn">
            <div>Add Cart</div>
          </div>
        </div>
      </div>
    </div>
  `
})
hereRenderProducts.innerHTML = renderProducts
```