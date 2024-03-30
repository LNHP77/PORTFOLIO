let myDiv = document.getElementById("my-div")
//Detect touch device
function isTouchDevice(){
    try{
         //We try to create TouchEvent. It would fail for desktops and throw error
         document.createEvent("TouchEvent");
         return true;
     }   catch (e)  {
        return false;
     }
 }

 const move = (e) =>{
    //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move hhis finger)
    try{
        //PageX and PageY return the position of client's cursor from top left of screen
        var x = !isTouchDevice() ? e.pageX : e.touchees[0].
        PageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].
        pageY;
    } catch (e) {}
    //set left and top of div based on mouse position
    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
};
//For mouse
document.addEventListener("mousemove",  (e) => {
    move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
    move(e)
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuItems = navbar.querySelectorAll('li');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

menuItems.forEach((item) => {
  item.onclick = () => {
    if (window.innerWidth <= 1090) {
      menu.classList.remove('bx-x');
      navbar.classList.remove('open');
    }
  };
});

document.addEventListener('scroll',() =>{
    const header = document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});

var swiper = new Swiper(".swiper", {
  // Paramètres du swiper
  effect: "cards",
  grabCursor: true,
  initialSlide: 3,
  loop: false,
  rotate: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination", // Utiliser la classe personnalisée pour la pagination
    clickable: true,
  },
});

function my() {
  document.getElementById("real-tabs-first").style.display = "flex";
  document.getElementById("real-tabs-second").style.display = "none";
  document.getElementById("real-tabs-third").style.display = "none";
  document.getElementById("real-tabs-fourth").style.display = "none";
}
function my2() {
  document.getElementById("real-tabs-first").style.display = "none";
  document.getElementById("real-tabs-second").style.display = "flex";
  document.getElementById("real-tabs-third").style.display = "none";
  document.getElementById("real-tabs-fourth").style.display = "none";
}
function my3() {
  document.getElementById("real-tabs-first").style.display = "none";
  document.getElementById("real-tabs-second").style.display = "none";
  document.getElementById("real-tabs-third").style.display = "flex";
  document.getElementById("real-tabs-fourth").style.display = "none";
}
function my4() {
  document.getElementById("real-tabs-first").style.display = "none";
  document.getElementById("real-tabs-second").style.display = "none";
  document.getElementById("real-tabs-third").style.display = "none";
  document.getElementById("real-tabs-fourth").style.display = "flex";
}
