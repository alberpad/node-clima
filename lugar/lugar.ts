const axios = require('axios');

const getLugarLatLng = async (direccion: string) => {
  let encodeUrl = encodeURI(direccion);

  let resp = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`
  );

  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`No hay resultados para la ciudad ${direccion}`);
  }

  let location = resp.data.results[0];
  let coors = location.geometry.location;

  // console.log('Dirección: ', location.formatted_address);
  // console.log('Longitud: ', coors.lng);
  // console.log('Latitud: ', coors.lat);

  return {
    direccion: location.formatted_address,
    lat: coors.lat,
    lng: coors.lng
  };
};

module.exports = {
  getLugarLatLng
};
