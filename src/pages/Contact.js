const Contact = () => {
    return ( 
        <div className="Contact-form">
            <div className="contact" id="contact">
               <div className="contact-header">
                  <h2>Contact </h2>
                  <span className="line"></span>
               </div>


               {/* contact form */}
               <div className="contact-form">

                  <h1>Get In Touch</h1>
                  <input id="text" type="text"  placeholder="Name: "/>
                  <a className="email-link"  href="https://mail.google.com/mail/u/0/?fs=1&to=templateventures@gmail.com&su=Greetings&body=Hello Daniel&tf=cm" target="_blank">Say hello</a>
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
 
export default Contact;