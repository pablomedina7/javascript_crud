const modelo = require('../model/topic_Model');

module.exports = {
  mostrarTemas: async (req, res) => {
    try {
      const temas = await modelo.obtenerTemas();
      // Verifica que 'temas' sea un arreglo
      if (!Array.isArray(temas)) {
        console.error('Error: temas no es un arreglo:', temas);
        return res.status(500).send('Error interno del servidor: los temas no se han obtenido correctamente.');
      }
      res.render('index', { temas });
    } catch (error) {
      console.error('Error al obtener temas:', error);
      res.status(500).send('Error al obtener los temas.');
    }
  },
  agregarTema: async (req, res) => {
    try {
      const { titulo } = req.body;
      if (!titulo) {
        return res.status(400).json({ error: 'El título es requerido' });
      }
      const nuevoTema = await modelo.agregarTema(titulo);
      res.json(nuevoTema); // Responde con el nuevo tema agregado
    } catch (error) {
      console.error('Error al agregar tema:', error);
      res.status(500).json({ error: 'Error al agregar el tema.' });
    }  
  },
  actualizarTema: async (req, res) => {
    try {
      const { id } = req.params;
      const { nuevoTitulo } = req.body;
  
      // Verifica si el campo 'nuevoTitulo' no está vacío
      if (!nuevoTitulo || nuevoTitulo.trim() === '') {
        return res.status(400).json({ success: false, message: 'El título no puede estar vacío.' });
      }
  
      // Realiza la actualización
      const temaActualizado = await modelo.actualizarTema(id, nuevoTitulo);
  
      // Verifica si se encontró y actualizó el tema
      if (temaActualizado) {
        res.json({ success: true, message: 'Tema actualizado exitosamente.' });
      } else {
        res.status(404).json({ success: false, message: 'El tema no se encontró.' });
      }
    } catch (error) {
      console.error('Error al actualizar tema:', error);
      res.status(500).json({ success: false, message: 'Error al actualizar el tema.' });
    }    
  },
  eliminarTema: async (req, res) => {
    try {
      const { id } = req.params;
      const resultado = await modelo.eliminarTema(id);
      if (resultado) {
        res.json({ success: true, message: 'Tema eliminado exitosamente.' });
      } else {
        res.status(404).json({ success: false, message: 'El tema no se encontró.' });
      }
    } catch (error) {
      console.error('Error al eliminar tema:', error);
      res.status(500).json({ success: false, message: 'Error al eliminar el tema.' });
    }  
  },
  votarTema: async (req, res) => {
    try {
      const { id } = req.params;
      const tema = await modelo.votarTema(id);
      if (tema) {
        res.json({ success: true, votos: tema.votos });
      } else {
        res.status(404).json({ success: false, message: 'Tema no encontrado' });
      }
    } catch (error) {
      console.error('Error al votar por el tema:', error);
      res.status(500).json({ success: false, message: 'Error al votar por el tema.' });
    }
  }
};
