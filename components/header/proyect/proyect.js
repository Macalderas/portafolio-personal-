   import{header} from "../header/header"
   function proyect(){

        let section = document.createElement('section');
        section.appendChild(header()) 
        section.appendChild(Item())
          return section
    }

function header(){
    let div = document.createElement('div');
        div.className = "header";

        let h2 = document.createElement('h2');
        h2.innerHTML = "proyectos ";
        div.appendChild(h2);


        let btn = document.createElement('div');
        btn.innerHTML = "git hub";
        div.appendChild(btn);

    return div ;
}

    function Item(){
        let div = document.createElement('div')
        div.innerText = "item de lista";

        return div ;
    }

    export {proyect}