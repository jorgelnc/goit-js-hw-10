import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_iHte4Ifc1eYMaA1v3RjGcO3u6BwcwuUZG8rC1iHwV0PZXYcg8WD6lIpyyl8p9QcL";

// Colección de razas
// Al cargar la página, debe hacerse una petición HTTP a la colección de razas.Para ello, haga una petición GET al recurso
// https://api.thecatapi.com/v1/breeds, que devuelve un array de objetos. Si la petición tiene éxito, debe rellenar select.breed-select 
// con opciones para que el value de la opción contenga el id de la raza y la interfaz de usuario muestre el nombre de la raza.

// Escriba una función fetchBreeds() que haga una petición HTTP y devuelva un promise con un array de razas como resultado de la petición. 
// Póngala en el archivo cat - api.js y haga una exportación con el nombre.

fetch("https://api.thecatapi.com/v1/breeds").then(response => {
    response.json();
    console.log(response);
})