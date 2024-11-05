const express = require('express');
const app = express();
const topicsRoutes = require('./routes/topics');

app.set('view engine', 'ejs'); // Usa EJS para renderizar vistas
app.use(express.static('public')); // Sirve archivos estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', topicsRoutes); // Usa las rutas

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
