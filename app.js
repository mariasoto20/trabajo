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
      titulo: 'sitios web',
      descripcion: 'creamos tu sitio web simplificamos el trabajo ',
      imagen: '/images/1.jpg'
    },
    {
      titulo: 'Aplicaciones Moviles ',
      descripcion: 'Apps para la gestión y mejora de tus ventas',
      imagen: '/images/2.jpg'
    },
    {
      titulo: 'Dashboard de Inteligencia de Negocios',
      descripcion: 'Panel interactivo de métricas e indicadores KPIs empresariales.',
      imagen:'/images/3.jpg'
    },
      {
      titulo: 'creacion de videojuegos educativos ',
      descripcion: 'aplicaciones de escritorio para potenciar el estudio como videojuegos ',
      imagen:'/images/4.jpg'
    } ,
     {
      titulo: 'redes sociales ',
      descripcion: 'app de redes sociales y noticias para tu propio negocio o tienda ',
      imagen:'/images/5.jpg'
    }
  ];

  // Fotos de perfil (puedes reemplazar estas URLs por imágenes locales en /public/images/)
  const fotosPerfil = [
    '/images/foto1.jpeg',
    '/images/foto3.jpg',
    '/images/foto2.jpeg'
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