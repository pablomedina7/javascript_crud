let topics = []; // Array en memoria para almacenar los temas

class Topic {
    constructor(title) {
        this.id = Date.now();
        this.title = title;
        this.votes = 0;
    }

    // Agrega un nuevo tema
    static add(title) {
        const newTopic = new Topic(title);
        topics.push(newTopic);
        return newTopic;
    }

    // Obtiene todos los temas, ordenados por votos de mayor a menor
    static getAll() {
        return topics.sort((a, b) => b.votes - a.votes);
    }

    // Encuentra un tema por su ID
    static findById(id) {
        return topics.find(topic => topic.id === parseInt(id));
    }

    // Elimina un tema por su ID
    static deleteById(id) {
        topics = topics.filter(topic => topic.id !== parseInt(id));
    }

    // Incrementa el voto de un tema
    static vote(id) {
        const topic = Topic.findById(id);
        if (topic) {
            topic.votes += 1;
        }
        return topic;
    }

    static updateTitle(id, newTitle) {
    const topic = Topic.findById(id);
    if (topic) {
        topic.title = newTitle;
    }
    return topic;
}
}
module.exports = Topic;
