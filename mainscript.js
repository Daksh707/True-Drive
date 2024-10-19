document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.navlist');
    
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});


////////////////////////////////////////

const sr =ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true

})
sr.reveal('.home .info',{delay:100,origin:'bottom'})
sr.reveal('.info .booking-form',{delay:100,origin:'right'})
sr.reveal('.about-container .image',{delay:100,origin:'left'})
sr.reveal('.about-container .content',{delay:100,origin:'right'})
sr.reveal('.services .title',{delay:100,origin:'top'})
sr.reveal('.services .container',{delay:100,origin:'bottom'})
sr.reveal('.cars-container',{delay:100,origin:'left'})
sr.reveal('.contact-aside',{delay:100,origin:'bottom'})