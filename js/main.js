let listaPlatillos = [
    {
        id: 1,
        nombre: "Crema de Verduras",
        descripcion: "Suave crema preparada con una variedad de verduras estacionales",
        precio: 12.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z",
    },
    {
        id: 2,
        nombre: "Albondigas con salsa Barbeque",
        descripcion:
            "Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa Bbq y espinacas",
        precio: 18.0,
        stock: 8,
        imagen: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    },
    {
        id: 3,
        nombre: "Hamburguesa Royal",
        descripcion: "Carne, Queso, Huevo y tomate, todo envuelto con pan",
        precio: 11.0,
        stock: 14,
        imagen: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 4,
        nombre: "Pizza de la casa",
        descripcion: "Pizza con recetea original de la casa",
        precio: 14.0,
        stock: 7,
        imagen: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 5,
        nombre: "Ceviche de la casa",
        descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
        precio: 20.0,
        stock: 10,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: 6,
        nombre: "Ramen Fusión",
        descripcion: "Ramen preparado con ingredientes Peruanos",
        precio: 19.0,
        stock: 6,
        imagen: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
];

/**REQUERIDA
 * 1. mostrar estos platillos de forma identica a como lo hace preview
 *
 * //ESTO ES OPCIONAL, aqui tendrías que investigar
 * 2. OPCIONAL (cuando de click en el boton agregar hacer que eso se sume al carrito)
 * 	-tips getElementsByClassName, y pueden agregar attributos adicionales
 * 3. OPCIONAL (mostrar el resumen del carrito en la parte izquierda)
 * 4. OPCIONAL (guardar el resumen en el LocalStorage)
 */

//lo ponen el discord

let mainContenido = document.getElementById('contenido');

listaPlatillos.forEach((plato) => {
    // Esto nos permite crear un elemento de tipo div.
    let platilloDom = document.createElement("div");
    platilloDom.classList.add("tarjeta");

    // Esto nos insertar dentro del div este contenido.
    platilloDom.innerHTML = `
        <div class="imagen">
            <img src="${plato.imagen}" alt="${plato.nombre}" />
        </div>
        <div class="texto">
            <h4>${plato.nombre}</h4>
            <p>${plato.descripcion}</p>
            <div class="precio">
                <span>S/ ${plato.precio}</span>
                <button class="btn-agregar" 
                data-id="${plato.id}">
                    Agregar
                </button>
            </div>
        </div>
    `;

    // Aca agregamos el div con el contenido a nuestro contenedor contenido
    mainContenido.appendChild(platilloDom);
});

// obtiene una lista de elementos por la clase de CSS
let btnAgregar = document.getElementsByClassName("btn-agregar");

let arrBtnsAgregar = Array.from(btnAgregar)

// Este carrito va a almacenar los datos.
let carrito = [];

arrBtnsAgregar.forEach((botonAgregar) => {
    botonAgregar.addEventListener('click', () => {
        // Obtener el valor del atributo
        let btnId = botonAgregar.getAttribute("data-id");
        let platoIdentificado = buscarPlatillo(btnId);
        agregarCarrito(platoIdentificado);
        dibujarCarrito(carrito);
    });
})

// Esta funcion nos va a permitir buscar un platillo en base a su id.
const buscarPlatillo = (id) => {
    let idNumber = parseInt(id);

    // filter devuelve un arrgelo, find devuelve un item
    let platilloEncontrado = listaPlatillos.find((plato) => {
        return plato.id === idNumber;
    })

    console.log({platilloEncontrado})
    return platilloEncontrado;
}

// Esta funcion nos ayuda a agregar un platillo a nuestro carrito en base a su index.
const agregarCarrito = (nuevoPlatillo) => {
    let existe = carrito.findIndex((plato) => {
        return plato.id === nuevoPlatillo.id
    })

    if(existe === -1){
        nuevoPlatillo.cantidad = 1;
        carrito.push(nuevoPlatillo)
    } else {
        carrito[existe].cantidad++;
    }
}

let tbodyCarrito = document.getElementById("tbody-carrito")
let tbodyResumen = document.getElementById("tbody-resumen")

const dibujarCarrito = (carritoActualizado) => {
    let trCarrito = "";
    carritoActualizado.forEach((item) => {
        trCarrito = trCarrito + 
        `<tr>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
            <td>${item.precio * item.cantidad}</td>
        </tr>`
    })
    tbodyCarrito.innerHTML = trCarrito;

    total = carritoActualizado.reduce((acumulador, plato) => {
        return acumulador + plato.precio * plato.cantidad;
    }, 0);

    tbodyResumen.innerHTML = `
    <tr>
        <td>TOTAL</td>
        <td>${total}</td>
    </tr>`
}