const storeMenu = document.querySelector(".store-menu");

storeMenu.addEventListener("mouseenter", function () {
  const subMenu = storeMenu.querySelector(".sub-menu");
  subMenu.style.display = "flex";
});

storeMenu.addEventListener("mouseleave", function () {
  const subMenu = storeMenu.querySelector(".sub-menu");
  subMenu.style.display = "none";
});
