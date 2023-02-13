console.log("Hii Rahul");

let hamberger = document.querySelector(".hamberger");
let cancelBtn = document.querySelector(".cancel-btn");
let mobileNav = document.querySelector(".mobile-nav");

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});
cancelBtn.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});