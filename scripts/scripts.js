//testimonial carousel

const reviews = document.querySelectorAll('.review');
const carouselButtons = document.querySelectorAll('.carousel-btn');

//user controlled carousel
for (let i = 0; i<reviews.length; i++){
    carouselButtons[i].addEventListener('click', function(){
        //remove active class from other buttons
        carouselButtons.forEach(x => x.classList.remove('active'));
        // add active class to button
        carouselButtons[i].classList.toggle('active');

        //hide testimonials
        reviews.forEach(x => x.classList.remove('hidden'));
        reviews.forEach(x => x.classList.add('hidden'));
        
        //show relevant testimonial
        reviews[i].classList.toggle('hidden');

        //update show index
        showIndex = i;

    })

}

//cycle through automatically
let showIndex =0;
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

for(let i = 0; i<membershipIcons.length; i++){
    membershipIcons[i].addEventListener('click', function(){
        //change colour of icons
        membershipName.forEach(x => x.classList.remove('big'));
        membershipName[i].classList.toggle('big')


        // hide memberships
        membershipText.forEach(x => x.classList.remove('hidden'));
        membershipText.forEach(x => x.classList.add('hidden'));

        // show membership
        membershipText[i].classList.toggle('hidden');

    })
}


//responsiveness
const responsiveMenu = document.querySelector('.responsive-menu');
const navbarUL = document.querySelector('.navbar ul');
const navbar = document.querySelector('.navbar');

responsiveMenu.addEventListener('click', function(){
    navbar.style.display = navbar.style.display ==="inline-block"? "none":"inline-block";
    navbarUL.classList.toggle('navbar-responsive');

})

/// windows re-size make sure responsive menu is hidden and navbar displays
window.addEventListener('resize', function(){
    if(window.innerWidth >= '1000'){
        navbar.style.display = "inline-block";
        responsiveMenu.style.display = "none";
    } else{
        navbar.style.display = "none";
        responsiveMenu.style.display = "inline-block";
    }
    
})
