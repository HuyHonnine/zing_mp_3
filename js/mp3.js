let searchForm = document.querySelector('.fa-play');

document.querySelector('.fa-play').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
    nav.classList.remove('active');
}

window.onscroll = () =>{
    if(window.scrollY > 60){
       document.querySelector('#header').classList.add('active');
    } 
    else{
       document.querySelector('#header').classList.remove('active');
    }
 }

 let swiper = new Swiper(".slider", {
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