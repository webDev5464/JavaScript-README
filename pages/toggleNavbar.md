## 🎓 Toggle Navbar

- **Preview** :- [Click here!](https://toggle-navbar-jsmd.netlify.app/)

**HTML**

```html
<div>
  <section onclick="toggleNav()" id="toggleBtn"></section>
  <section id="menu">
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>NodeJs</li>
      <li>MongoDb</li>
    </ul>
  </section>
</div>
```

**JavaScript**

```js
let menu = document.getElementById("menu");
let toggleBtn = document.getElementById("toggleBtn");
let initialState = false;

function toggleNav() {
  if (initialState == false) {
    initialState = true;
    menu.style.display = "none";
    toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  } else {
    initialState = false;
    menu.style.display = "block";
    toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}
toggleNav();
```
