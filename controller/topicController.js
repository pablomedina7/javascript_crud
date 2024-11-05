const modelo = require('../model/topic_Model');

module.exports = {
  mostrarTemas: (req, res) => {
    res.render('index', { temas: modelo.obtenerTemas() });
  },
  agregarTema: (req, res) => {
    modelo.agregarTema(req.body.titulo);
    res.redirect('/');
  },
  actualizarTema: (req, res) => {
    modelo.actualizarTema(parseInt(req.params.id), req.body.nuevoTitulo);
    res.redirect('/');
  },
  eliminarTema: (req, res) => {
    modelo.eliminarTema(parseInt(req.params.id));
    res.redirect('/');
  },
  votarTema: (req, res) => {
    modelo.votarTema(parseInt(req.params.id));
    res.redirect('/');
  }
};
