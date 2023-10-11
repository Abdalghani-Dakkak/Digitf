let navbar = document.getElementById("navbar");
let navLinks = Array.from(document.querySelectorAll(".navbar-links"));

navLinks.forEach( e => {
  e.addEventListener("click", _ => {
    navLinks.forEach( e => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
})

window.onscroll = () => {
  if(window.scrollY > 0) {
    navbar.classList.add("bg-nav");
    navLinks.forEach( e => {
      e.classList.add("text-light");
    });
  } else {
    navbar.classList.remove("bg-nav");
    navLinks.forEach( e => {
      e.classList.remove("text-light");
    });
  }
}


let navSearch = document.getElementById("navSearch");

function Search() {
  if(navSearch.getBoundingClientRect().width === 0) {
    navSearch.style.width = "0";
    setTimeout( function() {
      navSearch.style.transitionDuration = '.3s !important';
      navSearch.style.width = "auto";
    },1)
  } else {
    navSearch.style.width = "auto";
    setTimeout( function() {
      navSearch.style.transitionDuration = '.3s !important';
      navSearch.style.width = "0";
    },1)
  }
}


let loginComponant = document.getElementById("loginComponant");
let counter = 0;

function Login() {
  if(counter % 2 == 0) {
    loginComponant.classList.remove("d-none");
  } else {
    loginComponant.classList.add("d-none");
  }

  counter++;
}