// header "fixed"
const header_top_up = document.querySelector(".header_top_up");
let mainWindow = document.getElementById("home").clientHeight;

window.addEventListener("scroll", headerFixed);
// header "fixed" в случае, если обновят стр внизу
document.addEventListener('DOMContentLoaded', headerFixed);

function headerFixed () {
    let scrollPos = window.scrollY;
    if (scrollPos > mainWindow) {
        header_top_up.classList.add("fixed");
    }
    if (scrollPos < mainWindow) {
        header_top_up.classList.remove("fixed");
    }
};

// Для открывания/закрывания бургер-меню (три полоски или Х)
const menu_btn = document.querySelector(".nav_toggle");
const menu_nav = document.querySelector(".header_nav");
const nav_link = document.querySelectorAll(".nav_link");

menu_btn.addEventListener("click", menuToggle);

nav_link.forEach(function(item){
    item.addEventListener('click', menuToggle);
});

function menuToggle () {
    // чтобы сделать актив = крестик
    menu_btn.classList.toggle("active");
    // присвоить актив для header
    menu_nav.classList.toggle("open");
    header_top_up.classList.toggle("open");
};

// закрыть бургер меню, если было открыто в момент изменения ширины экрана
window.addEventListener('resize',function (){
    console.log(window.innerWidth);
    if (window.innerWidth > 1100) {
        menu_btn.classList.remove("active");
        // присвоить актив для header
        menu_nav.classList.remove("open");
        header_top_up.classList.remove("open");
    }
});


// АККОРДЕОН
const accordionBtn = document.querySelector(".header_bottom_accordion");
let accordionArrow = document.querySelector(".accordion_arrow");
let accordionContent = document.querySelector(".accordion_content");
let accordionItems = document.querySelectorAll('.accordion_content_item');

accordionBtn.addEventListener('click', function(){
    if (accordionContent.classList.contains('none')) {
        accordionArrow.classList.remove('closed');
        accordionArrow.classList.remove('chosen');
        accordionArrow.classList.add('opened');
        accordionContent.classList.remove('none');
    } else {
        accordionArrow.classList.remove('opened');
            if (! accordionArrow.classList.contains('chosen')){
                accordionArrow.classList.add('closed');
            }
        accordionContent.classList.add('none');
    }
});

accordionItems.forEach(function(item){
    item.addEventListener('click', function(){
        document.querySelector(".accordion_text").innerHTML = item.getAttribute("data-accordion");

        // accordionArrow.classList.remove('opened');
        accordionArrow.classList.add('chosen');
    });
});



// SEFVICES 
const serviceBtns = document.querySelectorAll(".service_block");
const servicesReadMore_text = document.querySelectorAll(".readMore_text");
const serviceImages = document.querySelectorAll(".sevice_img");;

serviceBtns.forEach(function(item){
    item.addEventListener('mouseover', function(){
        let imgID = item.getAttribute("data-serviceImg");
        let contentID = item.getAttribute("data-serviceContent");
        let currentImg = document.querySelector(imgID);
        let currentContent = document.querySelector(contentID);
        // console.log('contentID');
        
        // убираем синее со предыдущей кнопки
        serviceBtns.forEach(function(item){
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            }
        })

        // делаем синей новую кнопку
        item.classList.add('active');

        // открываем прежде спрятанныую картинку
        serviceImages.forEach((item) => {if (item.classList.contains('hide')){item.classList.remove('hide')};})
            

        // скрываем сперва все readMore_text
        servicesReadMore_text.forEach((item) => {if (! item.classList.contains("none")){item.classList.add("none")};});

        // выводим соответств. контент, убирая none
        currentContent.classList.remove('none');
        // убрать иконку
        currentImg.classList.add('hide');
    });
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