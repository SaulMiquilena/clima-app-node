const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const getInfo = async(direccion) => {

    //try {

    let coordenadas = await lugar.getLugarLatLng(direccion);
    let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

    return `La temperatura en ${ coordenadas.direccion } es de ${ temperatura } ºC.`

    /*} catch (error) {

        return `No se pudo determinar la temperatura para ${ direccion }.`;

    }*/

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));