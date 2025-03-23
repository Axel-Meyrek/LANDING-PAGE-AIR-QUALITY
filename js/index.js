/* VARIABLES Y COMPONENTES */
const $riesgo = document.querySelector('#riesgo');

/* FUNCIONES */
const calcularRiesgo = async () => {

    /* CONFIGURACCION API */
    const URL = 'https://iaq-fast-api.vercel.app/Risk';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            "Temperature": 25.0,
            "RelativeHumidity": 40.0,
            "DoorOpen": true,
            "NaturalVentilation": true,
            "NormalVentilation": false,
            "PeopleDensity": 0.5,
            "CO2": 500,
            "TVOC": 80,
            "PM25": 24,
            "PM10": 24,
            "Model": "model_risk"
          })
    };

    /* PETICIÓN */
    try {
        const respuesta = await fetch(URL, options);
        const data = await respuesta.json();
        console.log(data);
        $riesgo.textContent = data.Value;
    } catch (error) {
        console.error(error);
    }
}


/* EVENTOS */
document.addEventListener('DOMContentLoaded', calcularRiesgo);