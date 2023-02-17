import { Testimonial } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";


const paginaInicio = async (req, res) => { 

  //consultar 3 viajes del modelo Viaje y 3 testimoniales del modelo Testimonial
  const promiseBD = [];

  promiseBD.push(await Viaje.findAll({ limit: 3 }))
  promiseBD.push(await Testimonial.findAll({ limit: 3 }))

  try {

    const resultado = await Promise.all(promiseBD);
    
    res.render('inicio', {
      pagina: 'Inicio',
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1]
    });
  } catch (error) {
    console.log(error)
  }
};

const paginaNosotros = (req, res) => { 
  res.render('nosotros', {
    pagina: 'Nosotros'
  });
};

const paginaViajes = async (req, res) => { 
  //Consultar base de datos
  const viajes = await Viaje.findAll();

  res.render('viajes', {
    pagina: 'Próximos Viajes',
    viajes
  });
};

const paginaTestimoniales = async (req, res) => { 

  try {
    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales
    });
  } catch (error) {
    console.log(error)
  }
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const resultadoViaje = await Viaje.findOne({ where: { slug } })
    res.render('viaje', {
      pagina: 'Información Viaje',
      resultadoViaje
    })
  } catch (error) {
    console.log(error);
  }
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje
};