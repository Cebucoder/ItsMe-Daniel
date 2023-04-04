import cebuTravel from '../images/cebutravel.png';
import lms from '../images/LMS.png';
import rockps from '../images/rockps.png';
import sebastian from '../images/sebastian.png';
import shopaholic from '../images/Shopaholic.png';
import tonette from '../images/tonette.png';
import codit from '../images/codit.png';
import abeliago from '../images/abeliago.png';
import "../css/main-style.css";


const Work = () => {

    return ( 
        <div class="work-container">

            <div class="work" id="work">
               <div class="work-header">
                  <h2>Something I've Built </h2>
                  <span class="line"></span>
               </div>
            </div>

            {/* my project container */}
            <div class="my-projectCont">

               {/* project 1 */}
               <div class="myproject">
                  <div className="ImgContainer">
                     <img src={cebuTravel} alt="" />
                     <div class="imgoverlay"></div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Cebu Travel</h1>
                     <div class="hiding-later">
                        {/* details */}
                     <p>
                        Cebu Travel is a simple webiste that show's a beautiful site seing of different places on Cebu City 
                     <br /><br />
                     Cebu travel was build by <span class="highlights">Html Css and little bit of javacscript</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">Sublime</a></small>
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                     <a href="https://cebucoder.github.io/Cebu-Travel/html/index.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/Cebu-Travel" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 1 */}

               {/* project 2 */}
               <div class="myproject reverse">
                  <div className="ImgContainer">
                     <img src={lms} alt="" />
                     <div class="imgoverlay"></div>
                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Learning Manegement System (LMS)</h1>
                     {/* details */}
                     <p>
                        LMS is a website that made by  WD3P Group 10 student, A student portal is an online gateway where students can log into a school website to access important program information.  
                     <br /><br />
                     LMS was build by <span class="highlights">Html Css and javacscript</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">Sublime</a></small>
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                     <a href="https://cebucoder.github.io/LMS-Capstone/login-page.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/LMS-Capstone/tree/master" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                  </div>
               </div>
               {/* <project 2 */}

               {/* project 3 */}
               <div class="myproject">
                  <div className="ImgContainer">
                     <img src={rockps} alt="" />
                     <div class="imgoverlay"></div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>RPS Game</h1>
                     <div class="hiding-later">
                        {/* details */}
                     <p>
                        Rock Paper and Scissor (RPS) game is a small website that where you can play a game, just kill your mouse boredsome. 
                     <br /><br />
                     Rock Paper and Scissor was build by <span class="highlights">Html Css and Javacscript</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">Sublime</a></small>
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                     <a href="https://cebucoder.github.io/rock-paper-scissors/" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/rock-paper-scissors/tree/master" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 3 */}

               {/* project 4 */}
               <div class="myproject reverse">
                  <div className="ImgContainer">
                     <img src={sebastian} alt="" />
                     <div class="imgoverlay"></div>
                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Sebastian</h1>
                     {/* details */}
                     <p>
                        Sebstian website is a eccommerce webiste not totally big website, Sebastian was selling a different kind of flavor of icream and other product. 
                     <br /><br />
                     Sebastian was build by <span class="highlights">Html Css and little bit of javacscript</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">Sublime</a></small>
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                     <a href="https://cebucoder.github.io/Sebastian/"><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/Sebastian/tree/master"><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                  </div>
               </div>
               {/* <project 4 */}

               {/* project 5 */}
               <div class="myproject">
                  <div className="ImgContainer">
                     <img src={shopaholic} alt="" />
                     <div class="imgoverlay"></div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Shopaholic</h1>
                     <div class="hiding-later">
                        {/* details */}
                     <p>
                        Shopaholic website was a eccommerce /Clothing webiste that was focusing on  selling high quality and brandnew product such as Tshirt, Shorts and etc.  
                     <br /><br />
                     Shopahlic website was build by <span class="highlights">Html Css Javacscript and Bootstrap</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">Sublime</a></small>
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                   
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
               {/* <project 5 */}

               {/* project 6 */}
               <div class="myproject reverse">
                  <div className="ImgContainer">
                     <img src={tonette} alt="" />
                     <div class="imgoverlay"></div>
                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Tonette Events</h1>
                     {/* details */}
                     <p>
                        Tonette Event's website was  a personal website that giving information to client accoriding to thier services.
                     <br /><br />
                     Tonette Website was build by <span class="highlights">Html Css Javacscript and React</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">Sublime</a></small>
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                     <a href="https://cebucoder.github.io/Tonette-Events/" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/Tonette-Events" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                  </div>
               </div>
               {/* <project 6 */}

               {/* project 7 */}
               <div class="myproject">
                  <div className="ImgContainer">
                     <img src={codit} alt="" />
                     <div class="imgoverlay"></div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Code It</h1>
                     <div class="hiding-later">
                        {/* details */}
                     <p>
                        Code It Website is a simple website that giving information to new upcoming webdeveloper on where to learn programming and giving exact link  to a webiste and  youtuber channel where you can learn programming 
                     <br /><br />
                     Code It website was build by <span class="highlights">Html Css Javacscript and Bootstrap</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">Sublime</a></small>
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                     <a href="https://cebucoder.github.io/codeit/Exercise12/main.html" target='blank'><ion-icon name="logo-github"></ion-icon></a>
                     <a href="https://github.com/Cebucoder/codeit/tree/main/Exercise12" target='blank'><ion-icon name="code-download-outline"></ion-icon></a>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 7 */}

               {/* project 8 */}
               <div class="myproject reverse">
                  <div className="ImgContainer">
                     <img src={abeliago} alt="" />
                     <div class="imgoverlay"></div>

                  </div>

                  <div className="proj-details">
                     <small>Latest Project</small>
                     <h1>Abeliago</h1>
                     <div class="hiding-later">
                        {/* details */}
                     <p>
                        Abeliago is a  eccommerce webiste that made by Group 10 and  currently focusing on selling and legitimate latest smartphone.
                     <br /><br />
                     Abeliago website was build by <span class="highlights">React Js / PHP</span></p>

                     <span class="ide-use">
                        <small><a href="" class="about-line">VS Code</a></small>
                     </span>

                     <span class="source-code-icon">
                     <ion-icon name="logo-github"></ion-icon>
                     <ion-icon name="code-download-outline"></ion-icon>
                     </span>
                     </div>
                  </div>
               </div>
               {/* <project 8 */}

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
 
export default Work;