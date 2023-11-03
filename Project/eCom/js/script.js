//! Products Render
let hereRenderProducts = document.getElementById("hereRenderProducts")
const productsData = [...earbud]
let renderProducts = ""
productsData.forEach((x) => {
  renderProducts += `
    <div class="productCard">
      <div class="productImage">        
        <img src="${x.img}" onclick="showProductImageFunction(${x.id})" />
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

//! Search
let searchInput = document.getElementById("searchInput")

function enterSearch() {
  let inputValue = searchInput.value
  let productSearched = productsData.filter(item => item.title.toUpperCase().includes(inputValue.toUpperCase()))
  console.log(productSearched);

  const SearchedResult = productSearched.map((x) => {
    return `
      <div class="productCard">
        <div class="productImage">
          <img src="${x.img}" onclick="showProductImageFunction(${x.id})" />
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
  hereRenderProducts.innerHTML = SearchedResult.join("")
}

//! Show Product Image
let setProductImage = document.getElementById("setProductImage")
let cancelBtn = document.getElementById("cancelBtn")
let showProductImage = document.querySelector(".showProductImage")

cancelBtn.addEventListener("click", () => {
  showProductImage.classList.remove("ActiveProductsImage")
})

function showProductImageFunction(id) {
  let productImage = productsData.find(x => x.id == id)
  setProductImage.src = productImage.img
  showProductImage.classList.add("ActiveProductsImage")
}

//! Add to Cart
let cartDataRender = document.getElementById("cartDataRender")
const cartData = []

function addToCart(id) {
  let findData = productsData.find(state => state.id == id)
  let pushData = cartData.find(state => state.id == id)
  let popup = document.querySelector(".popup")

  if (pushData) {
    popup.innerHTML = "<h3>Product Already Added</h3>"
    popup.classList.add("alertPopup")
    setTimeout(() => popup.classList.remove("alertPopup"), 2000)
  } else {
    cartData.push(findData)
  }

  let renderData = cartData.map(x => {
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

  cartDataRender.innerHTML = renderData.join("")
}

//! remove cart
function removeCart(id) {
  let findCartData = cartData.findIndex(x => x.id == id)
  let popup = document.querySelector(".popup")

  if (!findCartData) {
    cartData.splice(findCartData, 1)
    popup.innerHTML = "<h3>Remove Product</h3>"
    popup.classList.add("successPopup")
    setTimeout(() => popup.classList.remove("successPopup"), 2000)
  }

  let renderData = cartData.map(x => {
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

  cartDataRender.innerHTML = renderData.join("")
}

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

    // Set theme in localStorage
    localStorage.setItem("theme", "light")
  } else {
    changeStyle.setAttribute("href", "./styles/darkTheme.css")
    themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>'

    // Set theme in localStorage
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