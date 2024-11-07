const express = require('express'); //se importa el modulo 
const app = express();
const bodyParser = require('body-parser');//middleware-post-get
const methodOverride = require('method-override');//middleware-put-delete
const controlador = require('./controller/topicController');
const PORT = 3000;
//motor de plantillas
app.set('view engine', 'ejs');//config de ejs como el motor de plantillas 
app.use(bodyParser.urlencoded({ extended: true }));//para ver objetos
app.use(methodOverride('_method'));

// Rutas para CRUD y votación
app.get('/', controlador.mostrarTemas); // Mostrar temas
app.post('/agregar', controlador.agregarTema); // Agregar tema
app.put('/actualizar/:id', controlador.actualizarTema); // Actualizar tema (usando PUT)
app.delete('/eliminar/:id', controlador.eliminarTema); // Eliminar tema (usando DELETE)
app.post('/votar/:id', controlador.votarTema); // Votar por un tema

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
