const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const controlador = require('./controller/topicController');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Agregado para manejar JSON
app.use(methodOverride('_method'));

// Rutas
app.get('/', controlador.mostrarTemas);
app.post('/agregar', controlador.agregarTema);
app.put('/actualizar/:id', controlador.actualizarTema);
app.delete('/eliminar/:id', controlador.eliminarTema);
app.post('/votar/:id', controlador.votarTema);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
