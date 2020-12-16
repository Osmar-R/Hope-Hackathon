const hamburgerIcon = document.querySelector(".hamburger--container");
const navbar = document.querySelector(".navbar");

hamburgerIcon.addEventListener("click", function(){
    navbar.classList.toggle("change")
})