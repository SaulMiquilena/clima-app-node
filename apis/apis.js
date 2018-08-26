const cargarAPI = (API) => {

    try {
        apiKey = require(`../apis/${ API }_api/${ API }.json`);
    } catch (error) {
        return false;
    }

    return apiKey;

}

module.exports = {
    cargarAPI
}