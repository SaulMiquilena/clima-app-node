const axios = require('axios');

const apis = require('../apis/apis');

const getClima = async(lat, lng) => {

    let openweathermapAPI = apis.cargarAPI('openweathermap')[0].key;

    if (openweathermapAPI === false) {
        throw new Error('No se encuentra una KEY para la API "openweathermap".');
    }

    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ openweathermapAPI }`);

    let temperatura = respuesta.data.main.temp;

    return temperatura;

}

module.exports = {
    getClima
}