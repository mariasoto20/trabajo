const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const proyectos = [
    {
      titulo: 'Sistema de Ventas e Inventario',
      descripcion: 'Aplicación para control de stock desarrollada con Node.js y MySQL.',
      imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
    },
    {
      titulo: 'Aplicación Móvil de Reportes',
      descripcion: 'App para la gestión comunitaria de incidencias construida en Flutter.',
      imagen: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80'
    },
    {
      titulo: 'Dashboard de Inteligencia de Negocios',
      descripcion: 'Panel interactivo de métricas e indicadores KPIs empresariales.',
      imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80'
    }
  ];

  // Fotos de perfil (puedes reemplazar estas URLs por imágenes locales en /public/images/)
  const fotosPerfil = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80'
  ];

  res.render('index', { 
    nombre: 'Tu Nombre',
    titulo: 'Mi Portafolio | Desarrollador Web',
    proyectos: proyectos,
    fotosPerfil: fotosPerfil
  });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
  });
}

module.exports = app;