const displayValoranterior = document.querySelector('.valoranterior');
const displayValoractual = document.querySelector('.valoractual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.button');
// creacion de variable tipo display
const disp = new Display(displayValoractual, displayValoranterior);


// cada vez que se toque el boton, forEach
botonesNumeros.forEach(boton =>{
    // event listener para click
    boton.addEventListener('click',()=>{
        // con funcion que envia el innerhtml como argumento
        disp.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',()=> disp.computar(boton.value));
});


