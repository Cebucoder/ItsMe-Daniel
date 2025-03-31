const Footer = () => {

  window.onload = function () {
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
    <div className="footer-container">
      <div className="social-cont">
        <a href="https://github.com/Cebucoder" target="blank"><i title="Github" className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/daniel-abellana-543330271/" target="blank"><i title="Linkedin-in" className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/templateventures" target="blank"><i title="Facebok page" className="fa-brands fa-facebook"></i></a>
      </div>
      <a href="">Created By: Daniel Abellana</a>
      <div className="mystats">
        <span className="star">
          <ion-icon name="star-outline"></ion-icon>
          <small id="star">0</small>
        </span>

        <span className="repo">
          <ion-icon title="repo" name="git-branch-outline"></ion-icon>
          <small id="repo">0</small>
        </span>
      </div>
    </div>
  );
}

export default Footer;