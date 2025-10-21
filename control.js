const inputNumero = document.getElementById("numeroInput");
const boton = document.getElementById("verificarBtn");
const areaResultado = document.getElementById("resultado");

boton.addEventListener("click", function() {

    const valorInput = inputNumero.value;
    
    //-----Hacemos las validaciones-----
    //validamos esta vacio
    if (valorInput === "") {
        areaResultado.textContent = "Por favor, ingrese un número.";
        areaResultado.style.color = "red";
        return;
    }

    //comvertimos el valor a un numero entero
    const numero = parseInt(valorInput, 10);

    //validamos que sea un numero
    if (isNaN(numero)) {
        areaResultado.textContent = "Error: Eso no es un número.";
        areaResultado.style.color = "red";
        return;
    }

    //-----Comprobamos si es par o impar-----
    if (numero % 2 === 0) {
        areaResultado.textContent = `El numero ${numero} es par.`;
        areaResultado.style.color = "green";
    } else {
        areaResultado.textContent = `El numero ${numero} es impar.`;
        areaResultado.style.color = "blue";
    }



});

