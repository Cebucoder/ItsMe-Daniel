const Footer = () => {

    window.onload = function() {
        getUserProfile();
      };
      
      function getUserProfile() {
        // Make a request to the GitHub API
        fetch(`https://api.github.com/users/cebucoder`)
          .then(response => response.json())
          .then(data => {
            // Check if the profile exists
            if (data.message && data.message === "Not Found") {
              showError("User not available");
            } else {
              // Fetch the number of starred repositories separately
              fetch(`https://api.github.com/users/cebucoder/starred`)
                .then(response => response.json())
                .then(starredRepos => {
                  showUserProfile(data, starredRepos.length);
                })
                .catch(error => {
                  showUserProfile(data, 0);
                  console.error(error);
                });
            }
          })
          .catch(error => {
            showError("Error fetching profile");
            console.error(error);
          });
      }
      
      function showUserProfile(profile, starredCount) {
        document.getElementById("repo").innerHTML = `${profile.public_repos}`;
        document.getElementById("star").innerHTML = `${starredCount}`;
      }
      
      function showError(message) {
        console.log(message);
      }
      
      
      

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
                    <small id="star">0</small>
                </span>

                <span class="repo">
                    <ion-icon title="repo" name="git-branch-outline"></ion-icon>
                    <small id="repo">0</small>
                </span>
            </div>
        </div>
     );
}
 
export default Footer;