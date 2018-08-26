const axios = require('axios');

const apis = require('../apis/apis');

const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);

    let geocodeAPI = apis.cargarAPI('geocode')[0].key;

    if (geocodeAPI === false) {
        throw new Error('No se encuentra una KEY para la API "geocode".');
    }

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=${ geocodeAPI }`);

    if (respuesta.data.status === "ZERO_RESULTS") {
        return `No hay resultados para la dirección ${ direccion }.`;
    }

    if (respuesta.data.status !== 'OK') {
        return 'Ha habido un problema de conexión.';
    }

    let location = respuesta.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }

}

module.exports = {
    getLugarLatLng
}