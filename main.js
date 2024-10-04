import { navBarDiv } from "./components/header/navBar/navBar.js";
import { proyectos } from "./components/header/proyect/proyect.js";
import { crearMenu } from './components/header/menu/barraLateral.js';

/* Componentes de la página */
let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

/* proyect */
let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild (proyectos()); 
DOM.appendChild(proyect);

/*  menú  */
let barraLateral = document.createElement('section');
barraLateral.className = "baraLateral" ;
barraLateral.appendChild (crearMenu());
DOM.appendChild(barraLateral);

