const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Conversion de datos del body
app.use(bodyParser.json());

//Importando rutas
app.use(require('./routes/students'));

//configuaracion de puerto
const PORT = process.env.PORT || 3406;
app.listen(PORT, ()=>{ 
  console.log(`Server corriendo en el puerto ${PORT}`);
});