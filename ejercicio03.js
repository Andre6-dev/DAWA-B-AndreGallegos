/* 3.	Calcular la comisión sobre las ventas totales de un empleado, 
sabiendo que el empleado no recibe comisión si su venta es hasta S/.150, 
si la venta es superior a S/.150 y menor o igual a S/.400 el empleado recibe 
una comisión del 10% de las ventas y si las ventas son mayores a 400, 
entonces la comisión es de S/.50 más el 9% de las ventas. */

const ventasEmpleado = parseFloat(prompt("Ingresa tus ventas totales: "));

// Funcion flecha para la comision
const comision = (ventasTotales) => {

    const comision1 = 0.1
    const comision2 = 0.09

    if( ventasTotales < 150) {
        return (`No llegaste al objetivo de ventas, no tienes comision.`)
    } else if(ventasTotales <= 400) {
        return (`Llegaste al objetivo de ventas de 150 y 400, tu comision es: ${ventasTotales * comision1}`)
    } else {
        return (`Llegaste al objetivo de ventas de mas de 400, tu comision es: ${50 + (ventasTotales * comision2)}`)
    }
}

console.log(comision(ventasEmpleado))