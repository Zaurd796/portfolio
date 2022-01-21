const header = document.querySelector(".header"),
      menuBurger = document.querySelector(".menu-burger"),
      menuList = document.querySelector(".header__list");

menuBurger.addEventListener("click", function() {
  header.classList.toggle("open");
  menuList.classList.toggle("open");
})
