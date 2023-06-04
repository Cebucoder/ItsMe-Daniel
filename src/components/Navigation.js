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
        <div className="navbar" id='navbar'>
            <div class="logo" title='My Logo'>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>

            <div className="navlink">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                    <div className="navbox1"></div>
                    <div className="navbox2"></div>
                    
                </li>
                <li>
                    <Link to="/Work">Work</Link>
                    <div className="navbox1"></div>
                    <div className="navbox2"></div>
                       
                </li>
                <li>
                    <Link to="/About">About Me</Link>
                    <div className="navbox1"></div>
                    <div className="navbox2"></div>
                    
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                    <div className="navbox1"></div>
                    <div className="navbox2"></div>
                    
                </li>
                    
                <li className="active">
                    <a href="https://drive.google.com/file/d/1972NtWLfNprprIJ8Mdy9n062o8gCAstA/view?usp=share_link" target="_blank">Resume</a>
                </li>
                </ul>
            </div>

            <div className="menu" onClick={openMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
		    </div>

            {/* <!-- sliding menu --> */}
	<div className="menu-container" id='menu-container'>
	</div>
	<div className="menu-content" id='menu-content'>
        <ul>
            <li onClick={closNav}><Link to="/">Home</Link></li>
            <li onClick={closNav}><Link to="/Work">My Project</Link></li>
            <li onClick={closNav}><Link to="/About">About Me</Link></li>
            <li onClick={closNav}><Link to="/Contact">Contact</Link></li>
            <li class="active" onClick={closNav}><a href="https://drive.google.com/file/d/1972NtWLfNprprIJ8Mdy9n062o8gCAstA/view?usp=share_link"target="_blank">Resume</a></li>
        </ul>
	</div>


        </div>
     );
}
 
export default Navigation;