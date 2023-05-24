const mobileMenu = document.querySelector(".header__block");
const openButton = document.querySelector(".header__open");
const menuEl = document.querySelector(".header__menu");

const openMenu = () => {
  mobileMenu.classList.add("active");
};

const closeMenu = (e) => {
  if (e.target.classList[0] === "header__block") {
    if (e.target.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    }
  }
};

const closeMenuLink = (e) => {
  if (e.target.classList.contains("header__menu-link")) {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    }
  }
};

mobileMenu.addEventListener("click", closeMenu);
openButton.addEventListener("click", openMenu);
menuEl.addEventListener("click", closeMenuLink);
