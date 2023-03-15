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
 
export default Contact;