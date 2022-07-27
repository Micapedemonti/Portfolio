const works = document.querySelector('#trabajos-container');
// const cors = NodeRequire('cors');


// app.use(cors());

function cargarTrabajos() {
    fetch('trabajos.json')
        .then(respuesta => respuesta.json()) 
        .then(trabajos => {
           trabajos.forEach(trabajo => {
                const row = document.createElement('div')
                row.innerHTML +=  `
                <img class="img-work" src=${trabajo.imgUrl}>
                    <h3 class="title"> ${trabajo.title}</h3>
                    <p class="tech-container"  ><span class="tech-work">${trabajo.tech[1]}</span>,<span class="tech-work">${trabajo.tech[2]}</span>,<span class="tech-work">${trabajo.tech[3]}</span></p>`;
               row.style.borderRadius =  '0.5rem' 
               row.style.width = '100%';
               row.style.backgroundColor = "rgb(203 213 225 "
               
                works.appendChild(row);

    
            });
        }) 
        .catch(error => console.log('Hubo un error : ' + error.message))
}
// modo dark

document.getElementById('id-sun').onclick = function(){
    document.getElementById('body-page').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
  }
  document.getElementById('id-moon').onclick = function(){
    document.getElementById('body-page').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
  }

cargarTrabajos();