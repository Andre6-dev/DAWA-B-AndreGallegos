/* 2.	Mostrar los 50 primeros números múltiplos de 7, 
pero NO múltiplos de 2,3 o 5. */


const ejercicio2 = (primo7, primo2, primo3, primo5) => {

    // Crear un array vacio
    const array = []

    // Recorrer hasta el 50 
    for (let iteradorArray = 0; iteradorArray < 51; iteradorArray++) {

        // Comprobamos los multiplos de 7
        if ((iteradorArray % 7) === 0) {
            array.push(+iteradorArray)
        } // Quitamos los multiplos de 2, 3 y 5 
        else if ((iteradorArray % 2) === 0 || (iteradorArray % 3) === 0 || (iteradorArray % 5) === 0) {
        }
    }
    return array
}

console.log(ejercicio2(7, 2, 3, 5))