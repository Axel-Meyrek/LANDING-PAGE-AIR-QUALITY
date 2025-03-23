/* VARIABLES Y COMPONENTES */
/* const $riesgo = document.querySelector('#riesgo'); */

/* FUNCIONES */
const calcularRiesgo = async () => {
    try {
        const respuesta = await fetch("https://iaq-fast-api.vercel.app");
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


/* EVENTOS */
document.addEventListener('DOMContentLoaded', calcularRiesgo);