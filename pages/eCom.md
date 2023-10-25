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