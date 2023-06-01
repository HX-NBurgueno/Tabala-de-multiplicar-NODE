const { writeFile, writeFileSync } = require("node:fs");
let colors = require("colors");
const crearArchivoTablas = async (numero, listar, hasta) => {
  try {
    console.clear();
    let salida = "";
    let consola = "";

    // \n se utiliza para crear un salto de linea entre los strings
    for (let i = 1; i <= hasta; i++) {
      //hicimos 2 variables por que con los de los colores el txt se imprimia mal.
      salida += `${numero} x ${i} = ${numero * i}\n`;
      consola +=
        `${numero}`.cyan.bold +
        " x ".brightYellow.bold +
        `${i}`.white.bold +
        " = ".blue.bold +
        `${numero * i}\n`.green.bold;
    }
    //lo consologueamos para ver la tabla por consola
    if (listar) {
      console.log("=====================".rainbow);
      console.log("    Tabla del: " + `${numero}`.cyan.bold);
      console.log("=====================".rainbow);
      console.log(consola);
    }

    //utilizamos la funcion de write para que nos cree el archivo con esos datos y lo guarda en la carpeta salida.
    writeFileSync(`./salida/Tabla-${numero}.txt`, salida);

    return `Tabla-${numero}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = crearArchivoTablas;
