// Main Variables

let theInput = document.querySelector(".get-repos input"),
  getButton = document.querySelector(".get-button"),
  reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
  console.log(theInput.value);
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
        console.log(data);
        // Empty The Container
        reposData.innerHTML = "";

        // Loop On Repositories
        data.forEach((repos) => {
          // Create The Main Div Element
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
