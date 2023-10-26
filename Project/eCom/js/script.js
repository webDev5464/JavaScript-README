//! Products Render
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
          <div class="addToCartBtn" onclick="addToCart(${x.id})">
            <div>Add Cart</div>
          </div>
        </div>
      </div>
    </div>
  `
})
hereRenderProducts.innerHTML = renderProducts

//! Add to Cart
let cartDataRender = document.getElementById("cartDataRender")
const cartData = []
function addToCart(id) {
  let findData = productsData.find((state) => state.id == id)
  let pushData = cartData.find((state) => state.id == id)
  let popup = document.querySelector(".popup")

  if (pushData) {
    popup.classList.add("showPopup")
    setTimeout(() => { popup.classList.remove("showPopup") }, 2000)
  } else {
    cartData.push(findData)
    localStorage.setItem("cart", JSON.stringify(cartData))
  }

  addToCartLocalStorage()
}

function addToCartLocalStorage() {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || []

  let renderCartData = storedCart.map((x) => {
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
  cartDataRender.innerHTML = renderCartData.join("")
}
window.addEventListener("load", () => {
  addToCartLocalStorage()
})

//! single page
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

//! toggle themeChange
let changeStyle = document.getElementById("changeStyle")
let themeIcon = document.getElementById("themeIcon")
themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
function toggleTheme() {
  if (changeStyle.getAttribute("href") === "./styles/darkTheme.css") {
    changeStyle.setAttribute("href", "./styles/lightTheme.css")
    themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>'
    localStorage.setItem("theme", "light")
  } else {
    changeStyle.setAttribute("href", "./styles/darkTheme.css")
    themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'
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