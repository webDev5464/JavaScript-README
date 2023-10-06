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
