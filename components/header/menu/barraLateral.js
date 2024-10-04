function crearMenu() {
    let barraLateral = document.createElement('div');
    barraLateral.className = 'barra-lateral';
  
    let herramientas = document.createElement('div');
    herramientas.className = 'herramientas';
  
    let colores = ['#9b59b6', '#1abc9c', '#f39c12', '#27ae60', '#e74c3c', '#34495e'];
    colores.forEach(color => {
      let herramienta = document.createElement('div');
      herramienta.className = 'herramienta';
      herramienta.style.backgroundColor = color;
  
      let textoHerramienta = document.createElement('span');
      textoHerramienta.textContent = 'Nombre Herramienta';
      herramienta.appendChild(textoHerramienta);
  
      herramientas.appendChild(herramienta);
    });
  
    barraLateral.appendChild(herramientas);
    return barraLateral; 
  }
  
  export { crearMenu };