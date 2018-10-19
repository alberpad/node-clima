"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require('axios');
const getLugarLatLng = (direccion) => __awaiter(this, void 0, void 0, function* () {
    let encodeUrl = encodeURI(direccion);
    let resp = yield axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };
});
module.exports = {
    getLugarLatLng
};
//# sourceMappingURL=lugar.js.map