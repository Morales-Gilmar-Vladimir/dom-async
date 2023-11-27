//Async await
const conectar_api = async() =>{
    try{
        const obtener = await fetch("https://jsonplaceholder.typicode.com/albums")
        const albunes = await obtener.json()
        //console.log(albunes)
        let i=1;
        console.log("Sus albunes son:")
        for(const nombre of albunes){
            console.log(`${i++} :${nombre.title}`)    
        }
    }catch(error){
        console.log(error)
    }
}
conectar_api()

//Promesas de ASINCRONISMO

const entregaPaquete = new Promise((resolve, reject) => {
    const tiempoEntrega = 3000; 

    // Simulación de entrega del paquete después de un tiempo determinado
    setTimeout(() => {
        const estadoEntrega = true;
        if (estadoEntrega) {
            resolve("¡El paquete ha sido entregado con éxito!");
        } else {
            reject("Lo sentimos, hubo un problema con la entrega del paquete.");
        }
    }, tiempoEntrega);
});

// Simulación de esperar la entrega del paquete
console.log("Esperando la entrega del paquete...");

entregaPaquete
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });
// ACCEDER AL CONTENIDO
// Acceder por etiqueta
const etiqueta = document.querySelectorAll('p')
// Acceder por clases
const titulo = document.getElementsByClassName('tm-margin-large-top tm-heading-large')
// Acceder por id
const slideshow = document.getElementById("slideshow-109-656114758994c")
// Acceder con querySelector
const seccion = document.querySelector('.uk-panel')
// Acceder con querySelectorAll
const imagenes = document.querySelectorAll('.uk-height-1-1 uk-vertical-align')

// MODIFICAR EL CONTENIDO
// Cambiar Texto
document.querySelector('.uk-thumbnail-caption').textContent='Hola Mundo'
// Cambiar imagenes
const foto = document.querySelector('.uk-overlay-toggle img')
foto.src="https://i.blogs.es/4d5a9c/spiderman-4/1366_2000.jpeg"

//Eliminacion de elementos 

const imagenAEliminar = document.querySelector('img');

if (imagenAEliminar) {
    imagenAEliminar.remove();
} else {
    console.log('La imagen no fue encontrada.');
}


//EVENTOS 


//Evento – click

// Obtén el elemento del botón por su ID
var boton = document.getElementById("enviarBtn");

// Agrega un event listener para el evento de clic
boton.addEventListener("click", function() {
    alert("¡Has hecho clic en el botón!");
});

//EVENTO MOUSEENTER

document.addEventListener("DOMContentLoaded", function() {

    // Obtén el elemento del botón por su ID
    var miBoton = document.getElementById("miBoton");

    // Agrega un event listener para el evento de mouseenter

    miBoton.addEventListener('mouseenter', function() {
        // Cambia el color de fondo cuando el mouse entra
        miBoton.style.backgroundColor = "red";
    });

    // Agrega un event listener para el evento de mouseout
    miBoton.addEventListener('mouseout', function() {
        // Restaura el color de fondo cuando el mouse sale
        miBoton.style.backgroundColor = "";
    });
});

//EVENTO INPUT.

// Este evento se activa cada vez que el valor de un elemento de entrada //(como un campo de texto) cambia

const miTextarea = document.querySelector('#mi-textarea');

//Si las palabras son mayor de 50 cambia de color por el input 
miTextarea.addEventListener('input', function (e) {
    if (e.target.value.length > 50) {
       
        miTextarea.style.backgroundColor = "blue";
    } else {
       
        miTextarea.style.backgroundColor = "";
    }
});


//Evento - keypress
const NombreC = document.getElementById('nombre');

 // Agregar un evento 'keypress' al elemento de entrada 'NombreC'
NombreC.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                console.log('Presionaste Enter en el campo de nombre');
            }
        });
// Codigo sincrono
function conteo() {
    console.log("Inicio del conteo");
    for (let i = 0; i < 3; i++) {
      console.log("Numeración: " + i);
    }
    console.log("Fin conteo");
  }
  
  conteo();
  console.log("Después del conteo");
  
  // Codigo asincronico
function conteoAsincronico(callback) {
    console.log("Inicio del conteo asincronico");
    setTimeout(function () {
      for (let i = 0; i < 3; i++) {
        console.log("Conteo asincronico " + i);
      }
      console.log("Fin del conteo asincronico");
      callback();
    }, 1000);
  }
  
  console.log("Antes del conteo asincronico");
  
  conteoAsincronico(function () {
    console.log("Después del conteo asincronico");
  });