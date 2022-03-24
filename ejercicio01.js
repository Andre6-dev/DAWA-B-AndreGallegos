
/* 1.	Desarrolle una función que permita determinar cuál de 
tres parámetros que se le proporcione a la función es mayor. */


// Crear variables para comprobar eso
const num1 = parseFloat(prompt("Ingresa el primer numero: "));
const num2 = parseFloat(prompt("Ingresa el segundo numero: "));
const num3 = parseFloat(prompt("Ingresa el tercer numero: "));

// Creando funcion para la comprobacion
const findLargestNumber = (number1, number2, number3) => {
    // Verificar si los numeros son iguales
    if (number1 === number2 && number1 === number3 && number2 === number3) {
        return (`Los 3 numeros son iguales y su valor es ${number1}`)
    } else {
        // numero 1 mayor
        if (number1 >= number2 && number1 >= number3) {
            return (`El numero mayor es ${number1}`)  
        }
        // numero 2 mayor 
        else if (number2 >= number1 && number2 >= number3) {
            return (`El numero mayor es ${number2}`)
        }
        // numero 3 mayor 
        else {
            return (`El numero mayor es ${number3}`)
        }
        
    }
}

console.log(findLargestNumber(num1, num2, num3));

