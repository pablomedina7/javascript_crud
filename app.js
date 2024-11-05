const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controlador = require('./controller/topicController');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas para CRUD y votación
app.get('/', controlador.mostrarTemas); // Mostrar temas
app.post('/agregar', controlador.agregarTema); // Agregar tema
app.post('/actualizar/:id', controlador.actualizarTema); // Actualizar tema
app.post('/eliminar/:id', controlador.eliminarTema); // Eliminar tema
app.post('/votar/:id', controlador.votarTema); // Votar por un tema

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
