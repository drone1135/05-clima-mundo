const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '3ea4dfc98emshb4c8e30e719c874p176b46jsn4d3d916078bf' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;




    return {
        direccion,
        lat,
        lng
    }
}

module.exports = { getLugarLatLng }