const _argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async (direccion: string) => {
  try {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
    return `El clima en ${coors.direccion} es de ${temp} grados centrígados`;
  } catch (error) {
    return `No se pudo determinar el clima en ${direccion}`;
  }
};

getInfo(_argv.direccion)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((e) => {
    console.log(e);
  });
