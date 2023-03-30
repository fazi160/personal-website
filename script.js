//menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//scroll section active
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })
    


   
    const form = document.getElementById("submitform");
    const nameInput = document.getElementById("fname");
    const emailInput = document.getElementById("mail");
    const mobNumber = document.getElementById("mobnu")
    const subjectinput = document.getElementById("mail-sub")
    const messageInput = document.getElementById("messages-all");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return false;
      }

      if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return false;
      }
      else if (!isEmail(emailInput.value)) {
        alert("Please enter valid email.");
        emailInput.focus();
        return false;
      }

      if (nameInput.value.trim() === "") {
        alert("Please enter your number");
        mobNumber.focus();
        return false;
      }

      if(subjectinput.value.trim() === ""){
        alert("enter your subject")
        subjectinput.focus();
        return false;
      }

      if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        messageInput.focus();
        return false;
      } });


    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }





// sticky navbar
let header =document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);


//remove menu icon navbar when click navbar link (scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};



//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//dark mode 
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

//scroll reveal
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });

 ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });