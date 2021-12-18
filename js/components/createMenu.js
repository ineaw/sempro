import { getUserName } from "../utils/storage.js";
// import { renderCart } from "../filter/cart.js";
import logoutButton from "./articles/logoutButton.js";
import { navMenuButtons } from "./articles/navMenuButtons.js";
// import clearCartButton from "./articles/clearCartButton.js";

// renderCart();
import { getCartItems } from "../components/getCartItems.js";

export default function createMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".nav__menu");
  const menuIcons = document.querySelector(".nav__icons");
  // const menuSearch = document.querySelector(".nav__search");

  const username = getUserName();
  const inCart = getCartItems();
  console.log(inCart);

  let authLink = `<div class="nav__icon"><a href="account.html" class="${pathname === "/account.html" ? "active" : ""}"><i class="fas fa-user"></i></a></div>`;

  if (username) {
    authLink = `
                <li class="nav__icon"><a href="admin.html" class="${pathname === "/admin.html" ? "active" : ""}"><i class="far fa-user"></i></a></li>
     `;
  }

  menuContainer.innerHTML = `    
                            <li class="nav__link"><a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}">Home</a></li>
                            <li class="nav__link"><a href="/products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a></li>
                            <li class="nav__link"><a href="#" class="${pathname === "#" ? "active" : ""}">About</a></li>
                            `;

  menuIcons.innerHTML = `
  ${authLink}
  <li class="nav__icon"><a href="/favourites.html"><i class="far fa-heart"></i></a></li>
  <li class="nav__icon">
  <li class="shopping-cart">
  <i class="fas fa-shopping-cart shopping-cart__btn"></i>
  <div class="products-in-cart hidden">
  <div class="overlay"></div>
  <div class="products-in-cart__header">
  <button id="close-button" class="products-in-cart__btn">
  <i class="fas fa-times"></i> Close
  </button>
  <h2 class="cart__header">Cart</h2>
  </div>
  <ul id="buy-items">
  </ul>
  <h4 id="sum-prices"></h4>
  <div class="cart-buttons">
  <button class="checkout disabled">Check out</button>
  <button id="clear-cart" type="button">Clear Cart</button>
  </div>
  </li>
  <li class="nav-icon"><h6 id="sum-items"></h6></li>
  `;

  inCart.innerHTML = `<i class="fas fa-shopping-cart shopping-cart__btn"></i>
  <li class="nav-icon"><h6 id="sum-items">0</h6></li>

  `;

  logoutButton();
  //   clearCartButton();
  navMenuButtons();
}
