// opening menu

let menuCont = document.getElementById("menu-container"); 
let menu = document.getElementById("menu-content"); 

function openMenu(){
  menu.classList.toggle("menu-toggle");
	menuCont.classList.toggle("menuCont-toggle");
}


// hiding and showing navigation bar when scrool down and up

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  let hidemenu = document.getElementById("menu-content");

var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    hidemenu.classList.remove("menu-toggle");
    menuCont.classList.remove("menuCont-toggle")
    

   
  }
  else {
  	document.getElementById("navbar").style.top = "-95px";
    hidemenu.classList.remove("menu-toggle");
    menuCont.classList.remove("menuCont-toggle")
    


  }
  prevScrollpos = currentScrollPos;
}