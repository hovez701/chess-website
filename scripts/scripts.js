//testimonial carousel
const navbarUL = document.querySelector('.navbar ul');
const navbar = document.querySelector('.navbar');
const reviews = document.querySelectorAll('.review');
const carouselButtonParent = document.querySelector('.carousel-buttons');
const carouselButtons = document.querySelectorAll('.carousel-btn');
const responsiveMenu = document.querySelector('.responsive-menu');
const header = document.querySelector('.header')
const hero = document.querySelector('.hero')
const lessons = document.querySelector('.lessons');

// page nav
// uses event delegation to avoid multiple event listeners
document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();

    //matching strategy
    if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        })

        //if responsive menu is present, hide after nav link clicked
        if (window.innerWidth <= 1023){
            navbar.style.display = "none";
        } 
    }
})


// //hover effect navbar
// const handleHover = function(e){
//     if(e.target.classList.contains('nav__link')){
//         const link = e.target;
//         const siblings = link.closest('.header').querySelectorAll('.nav__link')
//         const logo = link.closest('.header').querySelector('.logo');

//         siblings.forEach(el => {
//             if (el !== link) el.style.opacity = this})
//         logo.style.opacity = this
//     }
    
// }

// // use bind to pass variable into event handler, if more variables needed use array or object
// header.addEventListener('mouseover', handleHover.bind(0.5))
// header.addEventListener('mouseout', handleHover.bind(1))

//sticky navigation

// //method 1
// window.addEventListener('scroll', function(e){
//     if(window.scrollY > lessons.getBoundingClientRect().top){
//         console.log('sticky')
//     }
// })

// intersection observer api
const navHeight = header.getBoundingClientRect().height;
const stickyNav = function(entries){
    const [entry] = entries;
    console.log(entry)
    if (!entry.isIntersecting) header.classList.add('nav-sticky');
    else header.classList.remove('nav-sticky');

}
const obsOptions = {
    root:null, // target element intersecting the entire viewport
    threshold: 0,
    rootMargin: `-${navHeight}px`
};

const observer = new IntersectionObserver(stickyNav, obsOptions);
observer.observe(hero);







//user controlled carousel
carouselButtonParent.addEventListener('click', function(e){
    e.preventDefault()
    let id = e.target.closest('.carousel-btn').dataset.review;
    //remove active class from other buttons
    carouselButtons.forEach(x => x.classList.remove('active'));
    // add active class to button
    carouselButtons[id].classList.toggle('active');

    //hide testimonials
    reviews.forEach(x => x.classList.remove('hidden'));
    reviews.forEach(x => x.classList.add('hidden'));
    
    //show relevant testimonial
    reviews[id].classList.toggle('hidden');

    //update show index
    showIndex = parseInt(id);

})









let showIndex = 0;

//cycle through automatically
setInterval(function(){
        if (showIndex > 3){
            showIndex = 0;
        }
        //remove active class from other buttons
        carouselButtons.forEach(x => x.classList.remove('active'));

        // add active class to button
        carouselButtons[showIndex].classList.toggle('active');

        //hide testimonials
        reviews.forEach(x => x.classList.remove('hidden'));
        reviews.forEach(x => x.classList.add('hidden'));
        
        //show relevant testimonial
        reviews[showIndex].classList.toggle('hidden');

        showIndex+=1;
}, 3000);


//scroll loads
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene1=new ScrollMagic.Scene({
    duration: 0, 
    triggerElement: '.lessons', 
    reverse: false
})
.setClassToggle('.grid-box', "animate__fadeInUp", "show") 
.addTo(controller); // assign the scene to the controller


var scene2 = new ScrollMagic.Scene({
    duration: 0, 
    triggerElement: '.testimonials', 
    reverse: false
})
.setClassToggle('.container-side','animate__fadeInRight', "show") 
.addTo(controller); // assign the scene to the controller
    
var scene3 =new ScrollMagic.Scene({
    duration: 0, 
    triggerElement: '.membership', 
    reverse: false
})
.setClassToggle('.icons i','animate__fadeInDown', "show") 
.addTo(controller); // assign the scene to the controller


// membership clicker

// get triggers
const membershipIcons = document.querySelectorAll('.icons i');
// get boxes
const membershipText = document.querySelectorAll('.box');
const membershipName = document.querySelectorAll('.membership-name');
// on click show relevant box
// hide other boxes
const icons = document.querySelector('.icons');
icons.addEventListener('click', function(e){
    e.preventDefault();
    let id = e.target.closest('i').dataset.box;
    console.log(id);
    if(!id) return;

    //change colour of icons
    membershipName.forEach(x => x.classList.remove('big'));
    membershipName[id].classList.toggle('big')

    // hide memberships
    membershipText.forEach(x => x.classList.remove('hidden'));
    membershipText.forEach(x => x.classList.add('hidden'));

    // show membership
    membershipText[id].classList.toggle('hidden');

})



//responsiveness
responsiveMenu.addEventListener('click', function(){
    navbar.style.display = navbar.style.display ==="inline-block"? "none":"inline-block";
    // navbarUL.classList.toggle('navbar-responsive');

})

/// windows re-size make sure responsive menu is hidden and navbar displays
window.addEventListener('resize', function(){
    if(window.innerWidth > 1023){
        navbar.style.display = "inline-block";
        responsiveMenu.style.display = "none";
    } else{
        navbar.style.display = "none";
        responsiveMenu.style.display = "inline-block";
    }
    
})

