const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

// Rutas para cada acción
router.get('/', topicController.getTopics);
router.post('/new', topicController.createTopic);
router.put('/update/:id', topicController.updateTopic); // Asegúrate de que esta ruta esté correcta
router.delete('/delete/:id', topicController.deleteTopic);
router.post('/vote/:id', topicController.voteTopic);

module.exports = router;
