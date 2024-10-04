let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://i.pinimg.com/originals/2a/e6/32/2ae6321201346ff5837c810f05e4e0e2.jpg";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Mac";
navBarDiv.appendChild(h2);

// Exportar navBarDiv
export { navBarDiv };
