const Contact = () => {
    return ( 
        <div class="Contact-form">
            <div class="contact" id="contact">
               <div class="contact-header">
                  <h2>Contact </h2>
                  <span class="line"></span>
               </div>


               {/* contact form */}
               <div className="contact-form">

                  <h1>Get In Touch</h1>
                  <input id="text" type="text"  placeholder="Name: "/>
                  <a class="email-link"  href="https://mail.google.com/mail/u/0/?fs=1&to=danielabellana187@gmail.com&su=Greetings&body=Hello Daniel&tf=cm" target="_blank">Say hello</a>
               </div>

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


        </div>
     );
}
 
export default Contact;