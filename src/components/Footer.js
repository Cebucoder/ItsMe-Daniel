const Footer = () => {
    return ( 
        <div class="footer-container">
            <div class="social-cont">
                <a href="https://github.com/Cebucoder" target="blank"><i title="Github" class="fa-brands fa-github"></i></a>
                <i title="Instagram" class="fa-brands fa-instagram"></i>
                <i title="Twitter" class="fa-brands fa-twitter"></i>
                <a href="https://www.linkedin.com/in/daniel-abellana-543330271/" target="blank"><i title="Linkedin-in" class="fa-brands fa-linkedin-in"></i></a>
                <i title="Codepen" class="fa-brands fa-codepen"></i>
            </div>
            <a href="">Created By: Daniel Abellana</a>
            <div class="mystats">
                <span class="star">
                    <ion-icon name="star-outline"></ion-icon>
                    <small>30</small>
                </span>

                <span class="repo">
                    <ion-icon title="repo" name="git-branch-outline"></ion-icon>
                    <small>39</small>
                </span>
            </div>
        </div>
     );
}
 
export default Footer;