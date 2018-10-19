const axios = require('axios');

const getClima = async (lat: string, lng: string) => {
  let resp: any = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8407f1945e942d8098fdbad79b21755a`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima
};
