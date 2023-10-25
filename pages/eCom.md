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