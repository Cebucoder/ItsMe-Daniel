// import Particles from "react-tsparticles";
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div class="home-container" id="tsparticles">
            	{/* <!-- center content --> */}
            <div class="main-hero">
                <p class="intro">Hi, my name is</p>

                <h2 class="name">
                    <span class="anim">D</span> 
                    <span class="anim">a</span>
                    <span class="anim">n</span>
                    <span class="anim">i</span>
                    <span class="anim">e</span>
                    <span class="anim">l</span> 
                    <span class="anim space">A</span>
                    <span class="anim">b</span>
                    <span class="anim">e</span>
                    <span class="anim">l</span>
                    <span class="anim">l</span>
                    <span class="anim">a</span>
                    <span class="anim">n</span>
                    <span class="anim">a</span>
                </h2>
                <h2 class="intro2">
                    <span class="anim2">I</span>
                    <span class="anim2 space">c</span>
                    <span class="anim2">o</span>
                    <span class="anim2">d</span>
                    <span class="anim2">e</span>
                    <span class="anim2 space">w</span>
                    <span class="anim2">h</span>
                    <span class="anim2">a</span>
                    <span class="anim2">t</span>
                    <span class="anim2 space">e</span>
                    <span class="anim2">v</span>
                    <span class="anim2">e</span>
                    <span class="anim2">r</span>
                    <span class="anim2 space">I</span>
                    <span class="anim2 space">w</span>
                    <span class="anim2">a</span>
                    <span class="anim2">n</span>
                    <span class="anim2">t</span>
                    </h2>

                <p>"I’m a web developer,I love making goods staff and I currently focused on building a good <span class="upstatement">website.</span></p>

               <Link to="/About"><button class="explore">Explore more!</button></Link>

            </div>

            {/* <!-- side social media icon --> */}
            <div class="social-cont">
            <a href="https://github.com/Cebucoder" target="blank"><i title="Github" class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/daniel-abellana-543330271/" target="blank"><i title="Linkedin-in" class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.linkedin.com/in/daniel-abellana-543330271/" target="blank"><i title="Facebok page" class="fa-brands fa-facebook"></i></a>
                <div class="line"></div>
            </div>
            {/* <!-- side social media icon --> */}

            {/* <!-- side social media icon --> */}
            <div class="link-cont">
                <a href="" title="My Email">Danielabellana187@gmail.com</a>
                <div class="line"></div>
            </div>
            {/* <!-- side social media icon --> */}
            {/* <Particles></Particles> */}
        </div>
     );
}
 
export default Home;