const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {

        const infoLugar = await lugar.getLugarLatLng(direccion);
        const infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng);

        let temp = infoClima.main.temp;
        console.log(`El clima para ${infoLugar.direccion} es de: ${ temp }`);
    } catch (err) {
        console.log(`No se ha podido informar el clima para la ciudad: ${direccion}, ${ err }`);
    }


}

getInfo(argv.direccion);