const works = document.querySelector('#trabajos-container');

function cargarTrabajos() {
  fetch('./trabajos.json')
    .then(respuesta => respuesta.json()) 
    .then(trabajos => {
      trabajos.forEach(trabajo => {
        const row = document.createElement('div');
        row.className = 'hvr-float containerWork';
        row.innerHTML += `
          <a href="${trabajo.trabajoUrl}" class="linkWork">
            <img class="img-work" src=${trabajo.imgUrl}>
            <h3 class="title">${trabajo.title}</h3>
            <p class="tech-container">
              ${trabajo.tech.map(tech => `<span class="tech-work">${tech}</span>`).join(", ")}
            </p>
        `;
        row.style.borderRadius = '0.5rem';
        row.style.width = '100%';
        row.style.backgroundColor = 'rgb(203 213 225)';
        row.style.textDecoration = 'none';
  
        works.appendChild(row);
      });
    }) 
    .catch(error => console.log('Hubo un error: ' + error.message));
}

// Modo oscuro
document.getElementById('id-sun').onclick = function() {
  document.getElementById('body-page').classList.remove('dark-mode');
  document.getElementById('id-moon').classList.remove('active');
  this.classList.add('active');
};

document.getElementById('id-moon').onclick = function() {
  document.getElementById('body-page').classList.add('dark-mode');
  document.getElementById('id-sun').classList.remove('active');
  this.classList.add('active');
};

cargarTrabajos();
