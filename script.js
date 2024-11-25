let user = document.getElementById("userID")

async function fetchUser(userID) {
    let response = await fetch(`https://api.github.com/users/${userID}`)
    let result = await response.json();
    console.log(result);
   
    displayData(result);
}


document.getElementById("search").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    let userID = user.value; // Get the user input

    if (!userID) {
        alert("Enter a valid ID");
        return;
    }

    // Display the section and add the loader
    let secDiv = document.getElementById("secDiv");
    secDiv.classList.add("main-content");
    secDiv.classList.remove("main-contentHidden");
    secDiv.innerHTML = `<span class="loader"></span>`; // Show loader

    // Fetch user data
    fetchUser(userID);
})

function displayData({avatar_url,name,bio,followers,following,public_repos,html_url})
{
    if(!avatar_url){
        document.querySelector(".main-content").innerHTML =`<h1 style="background-color:red; width:300px; border-radius:80px; color:white;">User Not Found</h1>`
    }
    if(!bio){
        bio=""
    }
    else{
        document.querySelector(".main-content").innerHTML = `
    <div class="img">
        <img src="${avatar_url}" alt="">
        <p>${name}</p>
        <p>${bio}</p>
    </div>

    <div id="fview">
        <div class="follow">
            <p id="follower">Follower</p>
            <p id="Following">Following</p>
            <p id="repo">Repo</p>
            <p class="follower">${followers}</p>
            <p class="following">${following}</p>
            <p class="repo">${public_repos}</p>
        </div>
        <a href="${html_url}" target="-_blank" style="text-decoration:none;"><button id="view">View Profile</button></a>
        
    </div>
`
    }
    
}