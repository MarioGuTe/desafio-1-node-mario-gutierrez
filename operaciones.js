const fs = require("fs");

const registrar = (contenido) => {
  const data = fs.readFileSync("citas.json");
  const dataJson = JSON.parse(data);
  console.log(typeof dataJson);
  console.log(dataJson);
  dataJson.push(contenido);
  fs.writeFileSync("citas.json", JSON.stringify(dataJson));
};

const leer = () => {
  const data = fs.readFileSync("citas.json");
  JSON.parse(data).forEach((content) => {
    console.log(content);
  });
};

module.exports = { registrar, leer };
