

const navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () =>{
    navbar.classList.toggle('active');
}

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', ()=>{
  navbar.classList.remove('active');
});

const libtn = document.querySelector(".li");
document.querySelector("#shop-nav").onclick = () =>{
    libtn.classList.toggle('liactive');
}

const closeli = document.getElementById('closeli');
closeli.addEventListener('click', ()=>{
  libtn.classList.remove('liactive');
});

const searcharea = document.querySelector(".searcharea");
document.querySelector("#searchbtn").onclick = () =>{
    searcharea.classList.toggle('searchareaactive');
}

const searchareaclose = document.getElementById('searchareaclose');
searchareaclose.addEventListener('click', ()=>{
  searcharea.classList.remove('searchareaactive');
});

var swiper = new Swiper(".heroslider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
});

// Detect when the "Work" section is in the viewport
window.addEventListener('scroll', function() {
  const workSection = document.getElementById('footer');
  const icon = document.querySelector('.uppericon');
  
  const sectionPosition = workSection.getBoundingClientRect();
  
  // Check if the Work section is in view
  if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      icon.style.display = 'block';  // Show the icon
  } else {
      icon.style.display = 'none';   // Hide the icon when out of view
  }
});