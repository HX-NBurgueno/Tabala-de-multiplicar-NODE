//importamos yargs
const argv = require("yargs")
  .option({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      description: "Es la base de la tabla de multiplicar",
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      description: "Muestra la tabla en consola",
    },
    h: {
      alias: "hastra",
      type: "number",
      demandOption: true,
      default: 10,
      description: "Hasta que numero se quiere hacer la multiplicación",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    if (isNaN(argv.h)) {
      throw "El parametro de hasta tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
