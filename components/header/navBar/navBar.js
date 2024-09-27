let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://opencode.md/wp-content/uploads/2023/08/Top-8-facts-about-Linux-2.jpg";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "mac";
navBarDiv.appendChild(h2);

// Exportar navBarDiv
export { navBarDiv };