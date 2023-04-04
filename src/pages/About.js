import Me from '../images/Me.jpg';


const About = () => {
    return ( 
        <div className="About-container">

        {/* <!-- about --> */}

        <div class="about" id="about">
            <div class="about-header">
                <h2>About Me </h2>
                <span class="line"></span>
            </div>
        </div>

            {/* <!-- about-mother-cont --> */}
            <div class="about-mother-cont">
                        <div class="about-me">
                            <p>Hello! My name is Daniel and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Logo and invitations — and starting learning about HTML & CSS!</p>

                            <p>Fast-forward to today, and I’ve had the privilege on studying on <a class="about-line" href="https://kodego.ph/">Kodego Bootcamp</a>. My main focus these days is building accessible, inclusive website and products and digital experiences even if I'm still studying on bootcamp, in order to fullfill client side</p>
                            
                            <p>And Im officially graduated at Kodego Bootcamp as a full stack developer on <span class="about-line">March 31 / 2023</span></p>

                            <p>
                                I also recently creatng some social media on where I can  share my knowledge about website building such as <a class="about-line" href="https://github.com/Cebucoder">Github </a>and <a class="about-line" href="https://youtube.com/@cebucoder">Youtube</a>.
                            </p>

                            <p>
                            Here are a few Basic technologies  I’ve been learning with recently:</p>

                            <div class="mylang">
                                <span><div class="arrow"></div> Html</span>
                                <span><div class="arrow"></div> Css</span>
                                <span><div class="arrow"></div> Javascript</span>
                                <span><div class="arrow"></div> Bootstrap</span>
                                <span><div class="arrow"></div> React</span>
                                <span><div class="arrow"></div> Laravel</span>
                                <span><div class="arrow"></div> PHP</span>
                            </div>

                        </div>
                        <div class="myimage">
                            <img src={Me} alt="" />
                            <div class="box1"></div>
                            <div class="box2"></div>
                            <div class="box3"></div>
                            <div class="box4"></div>
                        </div>
                    </div>

             {/* <!-- side social media icon --> */}
             <div class="social-cont">
                <i title="Github" class="fa-brands fa-github"></i>
                <i title="Instagram" class="fa-brands fa-instagram"></i>
                <i title="Twitter" class="fa-brands fa-twitter"></i>
                <i title="Linkedin-in" class="fa-brands fa-linkedin-in"></i>
                <i title="Codepen" class="fa-brands fa-codepen"></i>
                <div class="line"></div>
            </div>
            {/* <!-- side social media icon --> */}

            {/* <!-- side social media icon --> */}
            <div class="link-cont">
                <a href="" title="My Email">Danielabellana187@gmail.com</a>
                <div class="line"></div>
            </div>
            {/* <!-- side social media icon --> */}

        </div>
     );
}
 
export default About;