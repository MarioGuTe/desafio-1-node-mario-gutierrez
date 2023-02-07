const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);
console.log(argumentos);

const operacion = argumentos[0];
const nombre = argumentos[1];
const edad = argumentos[2];
const animal = argumentos[3];
const color = argumentos[4];
const enfermedad = argumentos[5];

const contenido = {
  nombre: nombre,
  edad: edad,
  animal: animal,
  color: color,
  enfermedad: enfermedad,
};

if (operacion === "registrar") {
  registrar(contenido);
}
if (operacion === "leer") {
  leer();
}
