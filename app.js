const crearArchivoTablas = require("./helpers/multiplicar");
const argv = require("./config/yargs");

const { b, l, h } = argv;

crearArchivoTablas(b, l, h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado con exito!"))
  .catch((err) => console.log("ERROR:", err));
