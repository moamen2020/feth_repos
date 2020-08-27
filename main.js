// Main Variables

let theInput = document.querySelector(".get-repos input"),
  getButton = document.querySelector(".get-button"),
  reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

// Get Repos Function

function getRepos() {
  // If Value Is Empty
  if (theInput.value == "") {
    reposData.innerHTML = `<span>Please Write Github Username.</span>`;
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => res.json())
      .then((data) => {
        // Empty The Container
        reposData.innerHTML = "";

        // Loop On Repositories
        data.forEach((repos) => {
          // Add Repos in Container
          reposData.innerHTML += `
          <div class="repo-box">
            ${repos.name}
            <a target='_blank' href="https://github.com/${theInput.value}/${repos.name}">Visit</a>
            <span>Stars ${repos.stargazers_count}</span>
          </div>
          
          `;
        });
      });
  }
}
