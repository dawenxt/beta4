/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

//Slide 1
$(document).ready(function() {
    var dots = $('.dot');
    var bgImages = [
      'url("assets/img/bg4.jpg")',
      'url("assets/img/bg.jpg")',
      'url("assets/img/bg3.jpg")'
      // Add more image URLs as needed
    ];
  
    var currentIndex = 0;
    var homeSection = $('.home');
  
    function changeBackground() {
      homeSection.css('background-image', bgImages[currentIndex]);
  
      // Update active dot
      dots.removeClass('active');
      dots.eq(currentIndex).addClass('active');
  
      currentIndex = (currentIndex + 1) % bgImages.length;
      // Rest of your code for changing images
    }
  
    // Initial background image and active dot
    changeBackground();
  
    // Sliding effect and changing images
    setInterval(changeBackground, 5000); // Change image every 5 seconds (adjust timing as needed)
  });
  

//Slide 2
  let slideIndex = 0; // Start from the first slide
  showSlides();
  
  function plusSlides(n) {
      showSlides((slideIndex += n));
  }
  
  function currentSlide(n) {
      showSlides((slideIndex = n));
  }
  
  function showSlides() {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 5 seconds (adjust timing as needed)
  }
  
  const slideshowContainer = document.querySelector(".slideshow-container");
  
  // Hide the previous/next buttons initially
  document.querySelectorAll(".prev, .next").forEach(button => {
      button.style.display = "none";
  });
  
  // Show the previous/next buttons only when hovering over the slideshow container
  slideshowContainer.addEventListener("mouseenter", () => {
      document.querySelectorAll(".prev, .next").forEach(button => {
          button.style.display = "block";
      });
  });
  
  // Hide the previous/next buttons when leaving the slideshow container
  slideshowContainer.addEventListener("mouseleave", () => {
      document.querySelectorAll(".prev, .next").forEach(button => {
          button.style.display = "none";
      });
  });
  

  










