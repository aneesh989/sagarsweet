function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[120px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[120px]"),
      list.classList.remove("opacity-100"));
}

function dropdownHandler() {
  let check = window.getComputedStyle(document.getElementById("myDropdown"));
  if (check.display === "none") {
    document.getElementById("myDropdown").style.display = "block";
  } else {
    document.getElementById("myDropdown").style.display = "none";
  }
}
// slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
