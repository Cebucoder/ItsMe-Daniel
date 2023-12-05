import cebuTravel from '../images/cebutravel.png';
import lms from '../images/LMS.png';
import rockps from '../images/rockps.png';
import sebastian from '../images/sebastian.png';
import shopaholic from '../images/Shopaholic.png';
import tonette from '../images/tonette.png';
import codit from '../images/codit.png';
import abeliago from '../images/abeliago.png';
import maxwell from '../images/maxwell.png';
import taskido from '../images/taskidoLog.png';
import uxie from '../images/uxie.png';
import glowing from '../images/glowingB.png';
import craveSolution from '../images/CraveSolutions.png';
import evspresso from '../images/evspresso.png'
import creative from '../images/creative.png'
import shadowcrafts from '../images/shadowcrafts.png'
import capstonemaestro from '../images/capstonemaestro.png'
import luminox from '../images/luminox.png'
import travelers from '../images/travelers.png'
import "../css/main-style.css";


const Work = () => {

   
   // function ProjectCount(){
   //    let Projects = document.getElementsByClassName('myproject');
   //    for (let i = 0; i < Projects.length; i++) {
   //       document.getElementById('count').textContent = [i];
   //    }
   // }
   // ProjectCount();


    return ( 
        <div className="work-container">



            <div className="work" id="work">
               <div className="work-header">
                  <h2>Something I've Built </h2>
                  <span className="line"></span>
                  {/* <h2 id='count'></h2> */}
               </div>
            </div>

            {/* my project container */}
            <div className="my-projectCont ">

               {/* project 1 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={travelers} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Travelers</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     This project is a recreation of a website originally designed by Colorlib. The primary goal is to enhance my skills in web development by rebuilding and customizing the existing design. The original design served as a valuable reference for honing my proficiency in HTML, CSS, and JavaScript.
                     <br /><br />
                     Travelers was build by <span className="highlights">Html Css Javascript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/travelers/" target='blank'><ion-icon name="logo-github" title="Live demo"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 1 */}

               {/* project 2 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={shadowcrafts} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Shadowcrafts</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Shadow Craft, is a remarkable platform where you can easily replicate various styles of box shadows.
                     <br />
                     This innovative tool allows you to explore and experiment with different box shadow designs for your web projects. 
                     <br /><br />
                     Shadowcrafts was build by <span className="highlights">Html Css Javascript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://www.shadowcrafts.website/" target='blank'><ion-icon name="logo-github" title="Live demo"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 2 */}

               {/* project 3 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={capstonemaestro} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Capstone Maestro</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Generate capstone project ideas tailored to your interests and field of study. The Capstone-Maestro algorithm, curated by Cebucoder, ensures a diverse range of project proposals.
                     <br /><br />
                     Capstone Maestro was build by <span className="highlights">Html Css Javascript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://capstone-maestro.vercel.app/" target='blank'><ion-icon name="logo-github" title="Live demo"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 3 */}

               {/* project 4 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={creative} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        {/* <a href="https://cebucoder.github.io/Glowing_Beauty/" target='blank'><button>Live Demo</button></a> */}
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Creative</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Discover your "Design Thinking Superpowers". Learn how to unleash creativity, empathy, ideation, prototyping, and iteration to conquer challenges and fuel innovation. 
                     <br /><br />
                     Creative was build by <span className="highlights">Html Css Javascript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://templateventures.github.io/Creative/" target='blank'><ion-icon name="logo-github" title="Live demo"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 4 */}

               {/* project 5 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={evspresso} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        {/* <a href="https://cebucoder.github.io/Glowing_Beauty/" target='blank'><button>Live Demo</button></a> */}
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Evspresso Caffee</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     With jazz melodies and the aroma of freshly brewed coffee, Evpresso's caffee was undeniable.
                     <br /><br />
                     Evpresso was build by <span className="highlights">Html Css Javascript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://templateventures.github.io/Evspresso/" target='blank'><ion-icon name="logo-github" title="Live demo"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 5 */}


               {/* project 6 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={craveSolution} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        {/* <a href="https://cebucoder.github.io/Glowing_Beauty/" target='blank'><button>Live Demo</button></a> */}
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Crave Solutions</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Crave Solutions is a fast food restaurant located somewhere in the Philippines. Inside the Crave Solutions website, they display a variety of their food options, and customers can also make reservations from the website.
                     <br /><br />
                     Crave Solutions was build by <span className="highlights">Html Css Javascript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://templateventures.github.io/CraveSolutions/" target='blank'><ion-icon name="logo-github" title="Live demo"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 6 */}


               {/* project 7 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={glowing} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://templateventures.github.io/GlowingBeauty/" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Glowing Beauty</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Glowing Beauty unveils an extraordinary array of products, each one a harmonious blend of nature's wonders and innovative breakthroughs. From delicate lotions that caress the skin like a gentle breeze of transcendent beauty.
                     <br /><br />
                     Glowing Beauty was build by <span className="highlights">React</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://templateventures.github.io/GlowingBeauty/" target='blank'><ion-icon name="logo-github" title="Live demo"></ion-icon></a>
                     <a href="#" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 7 */}

               {/* project 8 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={uxie} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://uxie-lynk-45c77.web.app/index.html" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Uxie</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Uxie Website is a thesis project of one of my friend, Uxie is a group porfolio
                     <br /><br />
                     Uxie was build by <span className="highlights">Html Css and  javacscript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href=" https://uxie-lynk-45c77.web.app/index.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="#" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 8 */}


               {/* project 9 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={taskido} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/Todolist/index.html" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Taskido</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Taskkido is the ultimate productivity tool. It lets you effortlessly manage to-do lists, stay organized with a calendar, receive notifications, and set alarms.
                     Taskido is still currently working.
                     <br /><br />
                     Taskido was build by <span className="highlights">Html Css and  javacscript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href=" https://cebucoder.github.io/Todolist/index.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="#" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 9 */}


               {/* project 10 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={cebuTravel} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/Cebu-Travel/html/index.html" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Project</small>
                     <h1>Cebu Travel</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                        Cebu Travel is a simple website that show's a beautiful site seeing of different places on Cebu City 
                     <br /><br />
                     Cebu travel was build by <span className="highlights">Html Css and little bit of javacscript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">Sublime</a></small>
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href=" https://cebucoder.github.io/Cebu-Travel/html/index.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/Cebu-Travel" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 10 */}

               {/* project 11 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={lms} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/LMS-Capstone/login-page.html" target='blank'><button>Live Demo</button></a>
                     </div>
                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Learning Manegement System (LMS)</h1>
                     {/* details */}
                     <p>
                        LMS is a website that made by  WD3P Group 10 student, A student portal is an online gateway where students can log into a school website to access important program information.  
                     <br /><br />
                     LMS was build by <span className="highlights">Html Css and javacscript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">Sublime</a></small>
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/LMS-Capstone/login-page.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/LMS-Capstone/tree/master" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                  </div>
               </div>
               {/* <project 12 */}

               {/* project 13 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={rockps} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/rock-paper-scissors/" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>RPS Game</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                        Rock Paper and Scissor (RPS) game is a small website that where you can play a game, just kill your mouse boredsome. 
                     <br /><br />
                     Rock Paper and Scissor was build by <span className="highlights">Html Css and Javacscript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">Sublime</a></small>
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/rock-paper-scissors/" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/rock-paper-scissors/tree/master" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 13 */}

               {/* project 14 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={sebastian} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/Sebastian/" target='blank'><button>Live Demo</button></a>
                     </div>
                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Sebastian</h1>
                     {/* details */}
                     <p>
                        Sebstian website is a eccommerce webiste not totally big website, Sebastian was selling a different kind of flavor of icream and other product. 
                     <br /><br />
                     Sebastian was build by <span className="highlights">Html Css and little bit of javacscript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">Sublime</a></small>
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/Sebastian/"><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/Sebastian/tree/master"><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                  </div>
               </div>
               {/* <project 14 */}

               {/* project 15 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={shopaholic} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/Shopaholic-PH/main-final.html" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Shopaholic</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                        Shopaholic website was a eccommerce /Clothing webiste that was focusing on  selling high quality and brandnew product such as Tshirt, Shorts and etc.  
                     <br /><br />
                     Shopahlic website was build by <span className="highlights">Html Css Javacscript and Bootstrap</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">Sublime</a></small>
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                   
                     <a href="https://cebucoder.github.io/Shopaholic-PH/main-final.html" target='blank'>
                     <ion-icon name="logo-github"></ion-icon>
                     </a>
                    <a href="https://github.com/Cebucoder/Shopaholic-PH" target='blank'>
                    <ion-icon name="code-download-outline"></ion-icon>
                    </a>
                     
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 15 */}

               {/* project 16 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={tonette} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/Tonette-Events/" target='blank'><button>Live Demo</button></a>
                     </div>
                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Tonette Events</h1>
                     {/* details */}
                     <p>
                        Tonette Event's website was  a personal website that giving information to client accoriding to thier services.
                     <br /><br />
                     Tonette Website was build by <span className="highlights">Html Css Javacscript and React</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">Sublime</a></small>
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/Tonette-Events/" target='blank'><ion-icon name="logo-github"></ion-icon></a>
         
                     </span>
                  </div>
               </div>
               {/* <project 16 */}

               {/* project 17 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={codit} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/codeit/Exercise12/main.html" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Project</small>
                     <h1>Code It</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                        Code It Website is a simple website that giving information to new upcoming webdeveloper on where to learn programming and giving exact link  to a webiste and  youtuber channel where you can learn programming 
                     <br /><br />
                     Code It website was build by <span className="highlights">Html Css Javacscript and Bootstrap</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">Sublime</a></small>
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/codeit/Exercise12/main.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/codeit/tree/main/Exercise12" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 17 */}

               {/* project 18 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={abeliago} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Abeliago</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                        Abeliago is a  eccommerce webiste that made by Group 10 and  currently focusing on selling and legitimate latest smartphone.
                     <br /><br />
                     Abeliago website was build by <span className="highlights">React Js / PHP</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <ion-icon name="logo-github"></ion-icon>
                     <ion-icon name="code-download-outline"></ion-icon>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 18 */}

               {/* project 19 */}
               <div className="myproject">
                  <div className="ImgContainer">
                     <img src={maxwell} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="https://cebucoder.github.io/maxwell/" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Maxwell</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     Maxwell International School is one of the most well known schools in the Philippines. It is heavily considered as a school for the riches. In this school, male students wear white plain polos, black pants, and a Maxwell gray vest.
                     <br /><br />
                     Maxwell website was build by <span className="highlights">Html Css and Javascript</span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/maxwell/" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/maxwell" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 19 */}

               {/* project 20 */}
               <div className="myproject reverse">
                  <div className="ImgContainer">
                     <img src={luminox} alt="" />
                     <div className="imgoverlay"></div>
                     <div className="live-demo">
                        <a href="" target='blank'><button>Live Demo</button></a>
                     </div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>LuminoX</h1>
                     <div className="hiding-later">
                        {/* details */}
                     <p>
                     LuminoX is a K-pop website that showcases information about K-pop artists.
                     <br /><br />
                     LuminoX website was build by <span className="highlights">Html, CSS, JavaScript </span></p>

                     <span className="ide-use">
                        <small><a href="" className="about-line">VS Code</a></small>
                     </span>

                     <span className="source-code-icon">
                     <a href="https://cebucoder.github.io/kpop/" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     {/* <ion-icon name="code-download-outline"></ion-icon> */}
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 20 */}
               

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
                <a href="" title="My Email">Danielabellana187@gmail.com</a>
                <div className="line"></div>
            </div>
            {/* <!-- side social media icon --> */}
            
        </div>
        
     );
}
 
export default Work;