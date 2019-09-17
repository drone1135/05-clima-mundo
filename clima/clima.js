const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ba7c5b27869be27653575df99dec7e75&units=metric`);
    return resp.data;
}
module.exports = {
    getClima
}