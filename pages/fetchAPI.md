## 🎓 fetch API end rendering method

- **Preview** :- [Click here!](https://fetchapi-jsmd.netlify.app)

---

#### [API](https://res.cloudinary.com/dpiiduvvx/raw/upload/v1696623570/productsDW.json) :- (_Application Programming Interface_)

This API provide for learning purpose only.

**Products API**

```url
https://res.cloudinary.com/dpiiduvvx/raw/upload/v1696623570/productsDW.json
```

---

**HTML**

```html
<div id="productsRender"></div>
```

**JavaScript**

```js
let productsRender = document.getElementById("productsRender");

(function () {
  fetch(
    "https://res.cloudinary.com/dpiiduvvx/raw/upload/v1696623570/productsDW.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const productsData = [
        ...data.earbud,
        ...data.tshirt,
        ...data.shoes,
        ...data.tshirtWomen,
      ];
      const renderedItems = productsData.map((item) => {
        return `
                <div class="card">
                  <img src="${item.img1}"/>
                  <p>${item.title}</p>
                </div>
              `;
      });
      productsRender.innerHTML = renderedItems.join("");
    });
})();
```

### Get Data without then method.

```js
const fetchData = async () => {
  const res = await fetch("http://localhost:27016/data")
  const objData = res.json()

  console.log(objData);
}
```

### Post data using fetch method.

```js
const formHandler = async () => {
  
  const response = await fetch("http://localhost:27016/data", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })

  console.log(response);
}
```