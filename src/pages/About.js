import Me from '../images/Me.jpg';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";

import {
  SiJquery,
  SiElementor,
} from "react-icons/si";

const languages = [
  { name: "HTML", icon: <FaHtml5 />, className: "html" },
  { name: "CSS", icon: <FaCss3Alt />, className: "css" },
  { name: "jQuery", icon: <SiJquery />, className: "jquery" },
  { name: "JavaScript", icon: <FaJs />, className: "javascript" },
  { name: "Bootstrap", icon: <FaBootstrap />, className: "bootstrap" },
  { name: "React", icon: <FaReact />, className: "react" },
  { name: "Git", icon: <FaGitAlt />, className: "git" },
  { name: "PHP", icon: <FaPhp />, className: "php" },
  { name: "WordPress", icon: <FaWordpress />, className: "wordpress" },
  { name: "Elementor", icon: <SiElementor />, className: "elementor" },
];

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
                    <p>Hello! I'm a Front-End Web Developer with 4+ years of experience building modern, responsive, and high-performing websites. I specialize in WordPress development, custom website design, website optimization, debugging, and website security, including malware detection and removal.</p>

                    <p>I help businesses improve their online presence by delivering reliable web solutions, resolving technical issues, and maintaining secure, functional, and user-friendly websites. From custom development to troubleshooting and security cleanup, I focus on providing practical solutions that meet client needs.</p>

                    <p> Explore my projects on <a className="about-line" href="https://github.com/Cebucoder">Github </a> and connect with me <a className="about-line" href="https://www.linkedin.com/in/daniel-abellana/">Linkedin</a>. </p>

                    <p> Here are a few basic technologies I’ve been learning recently:</p>

                    {/* <div className="mylang">
                        <span><div className="arrow"></div> Html</span>
                        <span><div className="arrow"></div> Css</span>
                        <span><div className="arrow"></div> Jquery</span>
                        <span><div className="arrow"></div> Javascript</span>
                        <span><div className="arrow"></div> Bootstrap</span>
                        <span><div className="arrow"></div> React</span>
                        <span><div className="arrow"></div> Git</span>
                        <span><div className="arrow"></div> Laravel</span>
                        <span><div className="arrow"></div> PHP</span>
                        <span><div className="arrow"></div> WordPress</span>
                        <span><div className="arrow"></div> Elementor</span>
                    </div> */}
                    <div className="mylang">
                        {languages.map((language) => (
                            <span className="lang-item" key={language.name}>
                            <span className={`lang-icon ${language.className}`}>
                                {language.icon}
                            </span>
                            {language.name}
                            </span>
                        ))}
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

        </div>
    );
}

export default About;