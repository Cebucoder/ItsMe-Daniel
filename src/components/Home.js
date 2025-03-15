// import Particles from "react-tsparticles";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container" id="tsparticles">
            {/* <!-- center content --> */}
            <div className="main-hero">
                <p className="intro">Hi, my name is</p>

                <h2 className="name">
                    <span className="anim">D</span>
                    <span className="anim">a</span>
                    <span className="anim">n</span>
                    <span className="anim">i</span>
                    <span className="anim">e</span>
                    <span className="anim">l</span>
                    <span className="anim space">A</span>
                    <span className="anim">b</span>
                    <span className="anim">e</span>
                    <span className="anim">l</span>
                    <span className="anim">l</span>
                    <span className="anim">a</span>
                    <span className="anim">n</span>
                    <span className="anim">a</span>
                </h2>
                <h2 className="intro2">
                    <span className="anim2">I</span>
                    <span className="anim2 space">c</span>
                    <span className="anim2">o</span>
                    <span className="anim2">d</span>
                    <span className="anim2">e</span>
                    <span className="anim2 space">w</span>
                    <span className="anim2">h</span>
                    <span className="anim2">a</span>
                    <span className="anim2">t</span>
                    <span className="anim2 space">e</span>
                    <span className="anim2">v</span>
                    <span className="anim2">e</span>
                    <span className="anim2">r</span>
                    <span className="anim2 space">I</span>
                    <span className="anim2 space">w</span>
                    <span className="anim2">a</span>
                    <span className="anim2">n</span>
                    <span className="anim2">t</span>
                </h2>

                <p>"I’m a web developer,I love making goods staff and I currently focused on building a good <span className="upstatement">website.</span></p>

                <Link to="/About"><button className="explore">Explore more!</button></Link>

            </div>

            {/* <!-- side social media icon --> */}
            <div className="social-cont">
                <a href="https://github.com/Cebucoder" target="blank"><i title="Github" className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/daniel-abellana-543330271/" target="blank"><i title="Linkedin-in" className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/templateventures" target="blank"><i title="Facebok page" className="fa-brands fa-facebook"></i></a>
                <div className="line"></div>
            </div>
            {/* <!-- side social media icon --> */}

            {/* <!-- side social media icon --> */}
            <div className="link-cont">
                <a href="" title="My Email">templateventures@gmail.com</a>
                <div className="line"></div>
            </div>
            {/* <!-- side social media icon --> */}
            {/* <Particles></Particles> */}
        </div>
    );
}

export default Home;