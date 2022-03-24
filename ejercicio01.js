
/* 1.	Desarrolle una función que permita determinar cuál de 
tres parámetros que se le proporcione a la función es mayor. */

const num1 = parseFloat(prompt("Ingresa el primer numero: "));
const num2 = parseFloat(prompt("Ingresa el segundo numero: "));
const num3 = parseFloat(prompt("Ingresa el tercer numero: "));


const findLargestNumber = (number1, number2, number3) => {
    if (number1 === number2 && number1 === number3 && number2 === number3) {
        return (`Los 3 numeros son iguales y su valor es ${number1}`)
    } else {
        if (number1 >= number2 && number1 >= number3) {
            return (`El numero mayor es ${number1}`)
        } else if (number2 >= number1 && number2 >= number3) {
            return (`El numero mayor es ${number2}`)
        } else {
            return (`El numero mayor es ${number3}`)
        }
        
    }
}

console.log(findLargestNumber(num1, num2, num3));

