import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/noticias')
      .then(res => res.json())
      .then(data => setNoticias(data))
      .catch(err => console.error('Error al cargar noticias:', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <h1>Bienvenido a Mi Sitio Web</h1>
        <p>Diseño moderno, rápido y responsivo</p>
      </section>

      {/* SLIDESHOW DE NOTICIAS */}
      <section className="news">
        <h2>Últimas Noticias</h2>
        <Slider {...settings}>
          {noticias.map((n) => (
            <div key={n.id} className="slide">
             <img src={n.imagen_url.startsWith('http') ? n.imagen_url : `http://localhost:4000${n.imagen_url}`} alt={n.titulo}  style={{ width: '100%', borderRadius: '8px', maxHeight: '300px', objectFit: 'cover' }} />
              <h3>{n.titulo}</h3>
              <p>{n.contenido}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* INFORMACIÓN SOBRE LA PÁGINA */}
      <section className="about-site">
        <h2>Sobre Mi Página</h2>
        <p>
          Esta página web está diseñada para proporcionar información actualizada sobre nuestra empresa, servicios y novedades.
          Utilizamos tecnologías modernas como React y Node.js para ofrecer una experiencia rápida y fluida.
        </p>
        <p>
          Aquí podrás encontrar noticias recientes, conocer más sobre nosotros y contactarnos fácilmente.
          Nuestro objetivo es mantenerte informado y conectado.
        </p>
      </section>
    </div>
  );
};

export default Home;

