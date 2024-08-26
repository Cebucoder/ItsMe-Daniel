import Me from '../images/Me.jpg';


const About = () => {
    return ( 
        <div className="About-container">

        {/* <!-- about --> */}

        <div className="about" id="about">
            <div className="about-header">
                <h2>About Me </h2>
                <span className="line"></span>
            </div>
        </div>

            {/* <!-- about-mother-cont --> */}
            <div className="about-mother-cont">
                        <div className="about-me">
                            <p>Hello! My name is Daniel and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Logo and invitations — and starting learning about HTML & CSS!</p>

                            <p>Fast-forward to today, and I’ve had the privilege on studying on <a className="about-line" href="https://kodego.ph/">Kodego Bootcamp</a>. My main focus these days is building accessible, inclusive website and products and digital experiences even if I'm still studying on bootcamp, in order to fullfill client side</p>
                            
                            <p>And Im officially graduated at Kodego Bootcamp as a full stack developer on <span className="about-line">March 31 / 2023</span></p>

                            <p>
                                I also recently creatng some social media on where I can  share my knowledge about website building such as <a className="about-line" href="https://github.com/Cebucoder">Github </a>and <a className="about-line" href="https://youtube.com/@cebucoder">Youtube</a>.
                            </p>

                            <p>
                            Here are a few Basic technologies  I’ve been learning with recently:</p>

                            <div className="mylang">
                                <span><div className="arrow"></div> Html</span>
                                <span><div className="arrow"></div> Css</span>
                                <span><div className="arrow"></div> Javascript</span>
                                <span><div className="arrow"></div> Bootstrap</span>
                                <span><div className="arrow"></div> React</span>
                                {/* <span><div className="arrow"></div> Laravel</span> */}
                                <span><div className="arrow"></div> PHP</span>
                                <span><div className="arrow"></div> WordPress</span>
                            </div>

                        </div>
                        <div className="myimage">
                            <img src={Me} alt="" />
                            <div className="box1"></div>
                            <div className="box2"></div>
                            <div className="box3"></div>
                            <div className="box4"></div>
                        </div>
                    </div>

             {/* <!-- side social media icon --> */}
             <div className="social-cont">
                <a href="https://github.com/Cebucoder" target="blank"><i title="Github" className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/daniel-abellana-543330271/" target="blank"><i title="Linkedin-in" className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.linkedin.com/in/daniel-abellana-543330271/" target="blank"><i title="Facebok page" className="fa-brands fa-facebook"></i></a>
                <div className="line"></div>
            </div>
            {/* <!-- side social media icon --> */}

            {/* <!-- side social media icon --> */}
            <div className="link-cont">
                <a href="" title="My Email">templateventures@gmail.com</a>
                <div className="line"></div>
            </div>
            {/* <!-- side social media icon --> */}

        </div>
     );
}
 
export default About;