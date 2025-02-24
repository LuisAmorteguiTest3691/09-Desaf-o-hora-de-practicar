let botonEjercicioDos = document.querySelector('.boton-ejercicio-dos');
let botonEjercicioTres = document.querySelector('.boton-ejercicio-tres');
let botonEjercicioCuatro = document.querySelector('.boton-ejercicio-4');
let botonEjercicioCinco = document.querySelector('.boton-ejercicio-5');

// ejercicio 1
function holaEnConsola() {
    console.log('¡Hola, mundo!');
}

// ejercicio 2
function obtenerNombre() {
    botonEjercicioDos.addEventListener('click', () => {
        let nombreUsuario = document.querySelector('.nombreUsuario').value;

        mostrarNombreUsuario(nombreUsuario)
    });
    
    // aca es donde paso el parametro 
    function mostrarNombreUsuario(nombreUsuario) {
        let p = document.querySelector('.result-ejercicio-2');
        if (nombreUsuario) {
            p.innerHTML = `¡Hola, ${nombreUsuario}!`;
            p.style.color = 'black';
        } else {
            p.style.color = 'red';
            p.innerHTML = 'Ingrese un valor por favor en el nombre'
        }
        console.log('Estoy ejercicio 2')
    }
}


// ejercicio 3
function ejercicioTres() {
    botonEjercicioTres.addEventListener('click', () => {
        let numeroUsuario = parseFloat(document.querySelector('.numeroUno').value);

        mostrarNumeroUsuario(numeroUsuario);
    });

    function mostrarNumeroUsuario(numeroUsuario) {
        let p = document.querySelector('.result-ejercicio-3');

        if (numeroUsuario) {
            numeroUsuario = numeroUsuario * numeroUsuario;
            p.innerHTML = `El numero del usuario al doble es ${numeroUsuario}`;
            p.style.color = 'black';
        } else {
            p.style.color = 'red';
            p.innerHTML = 'Ingrese un numero'
        }
        console.log('Estoy ejercicio 3')
    }
}

// ejercicio 4
function ejercicioCuatro() {
    botonEjercicioCuatro.addEventListener('click', () => {
        let a = parseFloat(document.querySelector('.a').value);
        let b = parseFloat(document.querySelector('.b').value);
        let c = parseFloat(document.querySelector('.c').value);

        mostrarPromedio(a, b, c);
    });

    function mostrarPromedio(a, b, c) {
        let p = document.querySelector('.result-ejercicio-4');

        if (a && b && c) {
            let arrayNumeros = [a, b, c];
            let sumaNumero = 0;

            for (let i = 0; i < arrayNumeros.length; i++) {
                sumaNumero += arrayNumeros[i];
            }

            let n = arrayNumeros.length;

            let total = sumaNumero / n;

            p.innerHTML = `El valor del promedio de los numeros es: ${total}`;
            p.style.color = 'black';
        } else {
            p.style.color = 'red';
            p.innerHTML = 'Ingrese un numero en cada celda'
        }
    }
}

// ejercicio 5
function ejercicioCinco() {
    botonEjercicioCinco.addEventListener('click', () => {
        const todosLosDiv = document.getElementById('ejercicio-5').querySelectorAll('input');
        let parrafo = document.querySelector('.result-ejercicio-5');
        let valores = [];

        let bandera = 0;

        todosLosDiv.forEach(entrada => {
            valores.push(parseFloat(entrada.value));
        });


        let numerosValidados = [];
        for (const numeroIndividual of valores) {
            if (Number.isNaN(numeroIndividual)) {
                console.log('Termina aquí');
                bandera = 0;
                break;
            }
            bandera = 1;
            // numerosValidados.push(valores[numeroIndividual]);
        }
        // console.log("E"+ numerosValidados);

        if (bandera === 1) {
            validarNumeroMayorMenor(valores, parrafo);
        } else {
            parrafo.innerHTML = 'Por favor ingrese valores en todas las celdas';
            parrafo.style.color = 'red';
        }
    });

    function validarNumeroMayorMenor(valores, p) {
        let valorUno = parseFloat(valores[0]);
        let valorDos = parseFloat(valores[1]);


        if (valorUno > valorDos) {
            p.innerHTML = `El valor ${valorUno} es mayor a ${valorDos}`;
            p.style.color = 'black';
        } else if (valorUno < valorDos) {
            p.innerHTML = `El valor ${valorUno} es menor a ${valorDos}`;
            p.style.color = 'black';
        } else {
            p.innerHTML = `El valor ${valorUno} es igual a ${valorDos}`;
            p.style.color = 'black';
        }
    }
}   

holaEnConsola();
obtenerNombre();
ejercicioTres() 
ejercicioCuatro();
ejercicioCinco();


