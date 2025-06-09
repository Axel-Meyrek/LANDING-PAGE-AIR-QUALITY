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
        /* ESTOS DATOS DEBO RECUPERARLOS DE LA BD MARIA DB */
        body: JSON.stringify({
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

const abrirModal = (nombreDocumento) =>  {
    document.querySelector('#miModal').style.display = 'block';
    document.querySelector('#visorPDF').src = nombreDocumento;
}

const cerrarModal = () => {
    document.querySelector('#miModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const renderArticles = async () => {
    const $containerArticles = document.querySelector('#containerArticles');

    const response = await fetch('../data/articles.json', {
        mode: 'no-cors'
    });
    
    const data = await response.json();
    console.log(data);

    data.forEach(article => {
        const {nombre, descripcion, fecha_publicacion, ruta} = article;
        const $article = /* html */
            `<article class="article">
                <h3 class="article_title">${nombre}</h3>
                <p class="article_description">${descripcion}</p>
                <div class="article_flex">
                    <p class="article_date">${fecha_publicacion}</p>
                    <button id="btnMirarPDF" onclick="abrirModal('./articles/${ruta}.pdf')" class="article_button">Leer Completo</button>
                </div>
            </article>`;

        $containerArticles.innerHTML += $article;
    });
}


/* EVENTOS */
document.addEventListener('DOMContentLoaded', calcularRiesgo);

document.addEventListener('DOMContentLoaded', renderArticles);