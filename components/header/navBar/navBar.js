let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div"

let imgLogo = document.createElement('img')
imgLogo.src = "https://phantom-elmundo.unidadeditorial.es/215c5d4a7810a8ae7cd275c297d0b2a6/crop/168x72/1032x648/resize/828/f/webp/assets/multimedia/imagenes/2021/08/26/16299752237253.jpg"
imgLogo.className = "img-log";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Macalderas";
navBarDiv.appendChild(h2);  

    export {navBarDiv}