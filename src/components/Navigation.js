import logo from '../images/D.png';
import "../css/main-style.css";
import { Link } from "react-router-dom";

const Navigation = () => {


    function openMenu(){
        let menuCont = document.getElementById("menu-container");
        let menu = document.getElementById("menu-content");
        menu.classList.toggle("menu-toggle");
        menuCont.classList.toggle("menuCont-toggle");
    }


    // hiding and showing navigation bar when scrool down and up

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {


    var currentScrollPos = window.pageYOffset;
    let menuCont = document.getElementById("menu-container");
    let hidemenu = document.getElementById("menu-content");


    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        hidemenu.classList.remove("menu-toggle");
        menuCont.classList.remove("menuCont-toggle");
        
    }
    else {
        document.getElementById("navbar").style.top = "-95px";
        hidemenu.classList.remove("menu-toggle");
        menuCont.classList.remove("menuCont-toggle");

    }
    prevScrollpos = currentScrollPos;
    }
    function closNav(){
        let menuCont = document.getElementById("menu-container");
        let menu = document.getElementById("menu-content");
        let hidemenu = document.getElementById("menu-content");
        hidemenu.classList.remove("menu-toggle");
        menuCont.classList.remove("menuCont-toggle");
    }

    return ( 
        <div class="navbar" id='navbar'>
            <div class="logo" title='My Logo'>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>

            <div class="navlink">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                    <div class="navbox1"></div>
                    <div class="navbox2"></div>
                    
                </li>
                <li>
                    <Link to="/Work">Work</Link>
                    <div class="navbox1"></div>
                    <div class="navbox2"></div>
                       
                </li>
                <li>
                    <Link to="/About">About Me</Link>
                    <div class="navbox1"></div>
                    <div class="navbox2"></div>
                    
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                    <div class="navbox1"></div>
                    <div class="navbox2"></div>
                    
                </li>
                    
                <li class="active">
                    <a href="" target="_blank">Resume</a>
                </li>
                </ul>
            </div>

            <div class="menu" onClick={openMenu}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
		    </div>

            {/* <!-- sliding menu --> */}
	<div class="menu-container" id='menu-container'>
	</div>
	<div class="menu-content" id='menu-content'>
        <ul>
            <li onClick={closNav}><Link to="/">Home</Link></li>
            <li onClick={closNav}><Link to="/Work">My Project</Link></li>
            <li onClick={closNav}><Link to="/About">About Me</Link></li>
            <li onClick={closNav}><Link to="/Contact">Contact</Link></li>
            <li class="active" onClick={closNav}><a href=""target="_blank">Resume</a></li>
        </ul>
	</div>


        </div>
     );
}
 
export default Navigation;