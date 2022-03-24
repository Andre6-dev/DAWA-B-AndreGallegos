/* 2.	Mostrar los 50 primeros números múltiplos de 7, 
pero NO múltiplos de 2,3 o 5. */


const ejercicio2 = (primo7, primo2, primo3, primo5) => {
    const array = []

    for (let iteradorArray = 0; iteradorArray < 51; iteradorArray++) {

        if ((iteradorArray % 7) === 0) {
            array.push(+iteradorArray)
        } else if ((iteradorArray % 2) === 0 || (iteradorArray % 3) === 0 || (iteradorArray % 5) === 0) {
        }
    }
    return array
}

console.log(ejercicio2(7, 2, 3, 5))