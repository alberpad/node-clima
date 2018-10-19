"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
let getInfo = (direccion) => __awaiter(this, void 0, void 0, function* () {
    try {
        let coors = yield lugar.getLugarLatLng(direccion);
        let temp = yield clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp} grados centrígados`;
    }
    catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
});
getInfo(_argv.direccion)
    .then((mensaje) => {
    console.log(mensaje);
})
    .catch((e) => {
    console.log(e);
});
//# sourceMappingURL=app.js.map