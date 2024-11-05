const Topic = require('../models/models'); // Importa el modelo desde models/models.js

// Muestra los temas ordenados por votos
exports.getTopics = (req, res) => {
    const topics = Topic.getAll();
    res.render('index', { topics });
};

// Crea un nuevo tema
exports.createTopic = (req, res) => {
    Topic.add(req.body.title);
    res.redirect('/');
};

// Elimina un tema
exports.deleteTopic = (req, res) => {
    Topic.deleteById(req.params.id);
    res.json({ message: 'Tema eliminado' });
};

// Vota por un tema
exports.voteTopic = (req, res) => {
    const topic = Topic.vote(req.params.id);
    if (topic) {
        res.json({ votes: topic.votes });
    } else {
        res.status(404).json({ message: 'Tema no encontrado' });
    }
};
exports.updateTopic = (req, res) => {
    const updatedTopic = Topic.updateTitle(req.params.id, req.body.title);
    if (updatedTopic) {
        res.json({ message: 'Tema actualizado', topic: updatedTopic });
    } else {
        res.status(404).json({ message: 'Tema no encontrado' });
    }
};
