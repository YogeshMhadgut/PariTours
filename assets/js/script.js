'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
//const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

//const navElemArr = [navOpenBtn, navCloseBtn, overlay];
const navElemArr = [navCloseBtn,overlay];
const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


//Load more destination logic started here

const loadmore=document.getElementById("Load_More");
const backtonormal=document.getElementById("Back_Id");
const destination_items=document.querySelectorAll(".pl_item.hideelement");

// Track the number of items to show per click

const ItemsToShow=3;
let currentIndex=3;

loadmore.addEventListener('click',()=>{

  const nextItems=Array.from(destination_items).slice(currentIndex-3,currentIndex); 
  nextItems.forEach(item=>item.classList.remove('hideelement'));
  currentIndex+=ItemsToShow;

  if(currentIndex>destination_items.length)
  {
    loadmore.classList.add('hideelement');
    backtonormal.classList.remove('hideelement');
  }

});

backtonormal.addEventListener('click', () => {
  Array.from(destination_items).forEach((item, index) => {
     
          item.classList.add('hideelement');
      
  });

 currentIndex = 3;
  backtonormal.classList.add('hideelement');
  loadmore.classList.remove('hideelement');
});

//Load more destination logic ended here



//Load more packages logic started here

const loadmorepackage=document.getElementById("package_id");
const package_items=document.querySelectorAll(".plist.hideelement");

loadmorepackage.addEventListener('click',()=>{

  
  package_items.forEach(item=>item.classList.remove('hideelement'));
  loadmorepackage.classList.add('hideelement'); 

});

//Load more packages logic ended here