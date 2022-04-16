// Esta API nos permite traer los datos por el metodo GET.
fetch("https://reqres.in/api/users?page=2")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((datos) => {
    console.table(datos.data);
  });

// Metodo POST para crear un nuevo usuario en la

let nuevoUsuario = {
  name: "Andre Gallegos",
  job: "DEveloper",
};

// Los headers sirven como guia de remision

let cabecera = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(nuevoUsuario),
};

// Utilizamos la cabecera para enviar la consulta por el metodo POST.
fetch("https://reqres.in/api/users", cabecera)
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((usuarioCreado) => {
    console.table(usuarioCreado);
  })
  .catch((error) => {
    console.log(error);
  });
