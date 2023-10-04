## 🎓 Single Page Navigation

- [overview](https://single-page-navitaion-in-jsreadme.netlify.app/)

---

- CSS

```css
.container {
  display: flex;
}

.container > section {
  border: 1px solid gray;
  background-color: aliceblue;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;
}

.showContainer > section {
  width: 500px;
  padding: 0 5px;
  background-color: antiquewhite;
  overflow: auto;
  border: 1px solid black;
}
```

- html

```html
<div>
  <!--? Clicking buttons -->
  <div class="container">
    <section onclick="onePage('sectionOne')">Section 1</section>
    <section onclick="onePage('sectionTwo')" id="default">Section 2</section>
    <section onclick="onePage('sectionThree')">Section 3</section>
  </div>
  <!--? Contain show -->
  <div class="showContainer">
    <section class="clickedShow" id="sectionOne">
      <h3>Section 1 :</h3>
    </section>
    <section class="clickedShow" id="sectionTwo">
      <h3>Section 2 :</h3>
    </section>
    <section class="clickedShow" id="sectionThree">
      <h3>Section 3 :</h3>
    </section>
  </div>
</div>
```

- JavaScript

```js
document.getElementById("default").click();
function onePage(pageName) {
  let clickedShow = document.getElementsByClassName("clickedShow");

  for (let val = 0; val < clickedShow.length; val++) {
    clickedShow[val].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
```
