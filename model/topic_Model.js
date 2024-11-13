const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  obtenerTemas: async () => {
    try {
      return await prisma.tema.findMany({
        orderBy: { votos: 'desc' }
      });
    } catch (error) {
      console.error('Error al obtener temas:', error);
      return []; // Retorna un arreglo vacío si hay un error
    }
  },
  agregarTema: async (titulo) => {
    try {
      const nuevoTema = await prisma.tema.create({
        data: { titulo }
      });
      return nuevoTema; // Devuelve el nuevo tema
    } catch (error) {
      console.error('Error al agregar tema:', error);
      throw error;
    }  
  },
  actualizarTema: async (id, nuevoTitulo) => {
    try {
      const temaActualizado = await prisma.tema.update({
        where: { id: parseInt(id) },
        data: { titulo: nuevoTitulo }
      });
      return temaActualizado; // Devuelve el tema actualizado si es necesario
    } catch (error) {
      console.error('Error al actualizar el tema:', error);
      return null; // Maneja el error y devuelve null si no se pudo actualizar
    }  
  },
  eliminarTema: async (id) => {
    try {
      // Verificar si el tema existe antes de intentar eliminarlo
      const temaExistente = await prisma.tema.findUnique({
        where: { id: parseInt(id) }
      });
  
      if (!temaExistente) {
        throw new Error(`El tema con id ${id} no existe.`);
      }
  
      // Proceder a la eliminación si el tema existe
      await prisma.tema.delete({
        where: { id: parseInt(id) }
      });
  
      return { success: true, message: 'Tema eliminado exitosamente.' };
    } catch (error) {
      console.error('Error al eliminar tema:', error);
      throw error; // Lanza el error para que el controlador pueda manejarlo
    }  
  },
  votarTema: async (id) => {
    try {
      const tema = await prisma.tema.findUnique({
        where: { id: parseInt(id) }
      });
      if (tema) {
        return await prisma.tema.update({
          where: { id: parseInt(id) },
          data: { votos: tema.votos + 1 }
        });
      }
      return null;
    } catch (error) {
      console.error('Error al votar por el tema:', error);
      throw error;
    }
  }
};
