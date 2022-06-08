// header "fixed"
const header_top_up = document.querySelector(".header_top_up");
let mainWindow = document.getElementById("main").clientHeight;

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    if (scrollPos > mainWindow) {
        header_top_up.classList.add("fixed");
    }
    if (scrollPos < mainWindow) {
        header_top_up.classList.remove("fixed");
    }
});

// Для открывания бургер-меню (три полоски или Х)
const menu_btn = document.querySelector(".nav_toggle");
const menu_nav = document.querySelector(".header_nav");
const header_slogan = document.querySelector(".header_slogan");
const header_logo = document.querySelector(".header_logo");

menu_btn.addEventListener("click", function () {
    if (! menu_btn.classList.contains("active")){
        // чтобы сделать актив = крестик
        menu_btn.classList.add("active");
        // присвоить актив для header_nav
        menu_nav.classList.add("open");
        header_top_up.classList.add("open");
        header_slogan.classList.add("hide");
        header.classList.add("red");
        header_logo.classList.add("white");
    }
    else {
        // чтобы убрать актив = три полоски
        menu_btn.classList.remove("active");
        // убрать актив для нав_2
        menu_nav.classList.remove("open");
        header_top_up.classList.remove("open");
        // header_slogan.classList.remove("hide");
        // header.classList.remove("red");
    }
});






// SLIDER-WIPER 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Default parameters
    slidesPerView: 3,
    spaceBetween: 25,
    // Responsive breakpoints
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
    breakpoints: {
        // when window width is >= 320px
        200: {
        slidesPerView: 1,
        spaceBetween: 10
        },
        // when window width is >= 480px
        880: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        // when window width is >= 640px
        1300: {
        slidesPerView: 3,
        spaceBetween: 30
        }
    }
})