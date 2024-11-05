let temas = [
  { id: 1, titulo: 'Edu ', votos: 5 },
  { id: 2, titulo: 'Pablo', votos: 10 }
];

module.exports = {
  obtenerTemas: () => temas.sort((a, b) => b.votos - a.votos), // Orden descendente por votos
  agregarTema: (titulo) => {
    const nuevoTema = { id: temas.length + 1, titulo, votos: 0 };
    temas.push(nuevoTema);
  },
  actualizarTema: (id, nuevoTitulo) => {
    const tema = temas.find(t => t.id === id);
    if (tema) tema.titulo = nuevoTitulo;
  },
  eliminarTema: (id) => {
    temas = temas.filter(t => t.id !== id);
  },
  votarTema: (id) => {
    const tema = temas.find(t => t.id === id);
    if (tema) tema.votos += 1;
  }
};
