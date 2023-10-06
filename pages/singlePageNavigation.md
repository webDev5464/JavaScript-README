## 🎓 Single Page Navigation

- **Preview** :- [Click here!](https://single-page-navitaion-in-jsreadme.netlify.app/)

---

**HTML**

```html
<nav>
  <ul>
    <li class="navLink" onclick="toggleNav('home')" id="default">Home</li>
    <li class="navLink" onclick="toggleNav('products')">products</li>
    <li class="navLink" onclick="toggleNav('cart')">cart</li>
  </ul>
</nav>

<main>
  <div id="home" class="container">
    <h1>This is a Home Page</h1>
  </div>
  <div id="products" class="container">
    <h1>This is a products page</h1>
  </div>
  <div id="cart" class="container">
    <h1>This is a cart page</h1>
  </div>
</main>
```

**JavaScript**

```js
document.getElementById("default").click();

function toggleNav(pageName) {
  let container = document.getElementsByClassName("container");
  let navLink = document.getElementsByClassName("navLink");
  for (let init = 0; init < container.length; init++) {
    container[init].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";

  for (let init = 0; init < navLink.length; init++) {
    navLink[init].style.color = "black";
  }
  document.querySelector(`[onclick="toggleNav('${pageName}')"]`).style.color =
    "red";
}
```
