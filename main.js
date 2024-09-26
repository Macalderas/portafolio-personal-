import { navBarDiv } from "./components/header/navBar/navBar";
import {proyect} from "./components/header/proyect/proyect";
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
proyect.innerText = "hola mundo yo soy proyect"; /* componente  */
DOM.appendChild(proyect);

let section = document.createElement('section');
section.innerText = "Hola soy texto completo";
DOM.appendChild(proyect);
