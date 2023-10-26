# 🧪 Theme set in localStorage

****
- **Preview** :- [Click here!](https://js-documentation-localstorage-theme.netlify.app)
****

`**index.css**`

```css
body {
  background-color: var(--black);
  color: var(--white);
}

hr {
  border: 2px solid var(--black);
}

.card {
  width: 300px;
  height: 400px;
  border: 2px solid var(--white);
  border-radius: 10px;
  background-color: var(--cardBg);
  color: var(--black);
  padding: 5px;
}

.cardImg>img {
  width: 300px;
  border-radius: 10px;
}

/** Switch */

.switch {
  position: relative;
  border: 2px solid var(--white);
  width: 40px;
  height: 20px;
  border-radius: 20px;
  box-shadow: inset 0 0 5px var(--white);
  cursor: pointer;

  scale: 1.5;
  margin: 20px;
}

.boll {
  position: absolute;
  top: 0;
  border: 1px solid var(--white);
  background-color: var(--white);
  color: var(--black);
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
}

.right {
  right: 0;
}
```

`**dark.css**`

```css
:root {
  --black: black;
  --white: white;
  --cardBg: lightgray;
}
```

`**light.css**`

```css
:root {
  --black: white;
  --white: black;
  --cardBg: black;
}
```

`**index.html**`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>Document</title>
  <link rel="stylesheet" href="./index.css">
  <link rel="stylesheet" href="./dark.css" id="themeStyle">
</head>

<body>

  <div class="switch" onclick="toggleTheme()">
    <div class="boll"></div>
  </div>

  <div class="card">
    <div class="cardImg">
      <img src="https://res.cloudinary.com/dpiiduvvx/image/upload/v1694261480/cld-sample-2.jpg" alt="Nature">
    </div>
    <hr>
    <div class="cardDetail">
      <h2>Mount Everest</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, labore quidem minus doloremque saepe ducimus
        voluptate et ab distinctio animi illum vitae! Quisquam earum maxime tempore hic aut temporibus natus?</p>
    </div>
  </div>
  
  <script src="./script.js"></script>
</body>

</html>
```

`**script.js**`

```js
let themeStyle = document.getElementById("themeStyle")
let boll = document.querySelector(".boll")

function toggleTheme() {
  if (themeStyle.getAttribute("href") === "./dark.css") {
    themeStyle.setAttribute("href", "./light.css")
    localStorage.setItem("theme", "light")
    boll.innerHTML = `<i class="fa-solid fa-moon"></i>`
    boll.classList.add("right")
  } else {
    themeStyle.setAttribute("href", "./dark.css")
    localStorage.setItem("theme", "dark")
    boll.innerHTML = `<i class="fa-solid fa-sun"></i>`
    boll.classList.remove("right")
  }
}

let store = localStorage.getItem("theme")
if (store === "light") {
  themeStyle.setAttribute("href", "./light.css")
  boll.innerHTML = `<i class="fa-solid fa-moon"></i>`
  boll.classList.add("right")
} else {
  themeStyle.setAttribute("href", "./dark.css")
  boll.innerHTML = `<i class="fa-solid fa-sun"></i>`
  boll.classList.remove("right")
}
```