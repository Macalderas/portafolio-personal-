import { navBarDiv } from "./components/header/navBar/navBar";

/* Componentes de la pagina  */
let DOM = document.querySelector("#root");

/* navBar */

let navBar = document.createElement('section');
navBar.className = "nav-Bar";
navBar.appendChild(navBar);
DOM.appendChild(navBar);

/* proyect */
let proyect = document.createElement('section')
proyect.classList = "proyect";
proyect.innerHTML = "hola mundo yo soy proyect";
DOM.appendChild(proyect);
