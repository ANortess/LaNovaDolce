import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { cartaPizzeria } from './pizzas.js';
import { textos } from './textos.js';
import logoPizzeria from './assets/Varios/Cocinero.png';
import imagenHistoria from './assets/Varios/Pizza.jpg';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Usamos el objeto de opciones para asegurar comportamiento instantáneo
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Algunos navegadores usan 'auto' o 'instant'
    });
  }, [pathname]);

  return null;
};

const Navbar = ({ idioma, setIdioma, t, setCategoria, categoriaActual }) => {
  const location = useLocation(); // Detecta la URL actual
  const esCarta = location.pathname === '/carta';
  const [menuAbierto, setMenuAbierto] = useState(false);
  const categorias = ['Entrantes', 'Ensaladas', 'Pizzas', 'Pastas', 'Carnes', 'Postres', 'Bebidas', 'Vinos'];

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoPizzeria} alt="Logo" className="logo-img" />
        </Link>
      </div>
      {!esCarta ? (
        <ul className={`navbar-menu ${menuAbierto ? 'active' : ''}`}>
          <li><a href="/#inicio" onClick={cerrarMenu}>{t.inicio}</a></li>
          <li><a href="/#info" onClick={cerrarMenu}>{t.info}</a></li>
          <li><a href="/#carta" onClick={cerrarMenu}>{t.carta}</a></li>
          <li><a href="/#contacto" onClick={cerrarMenu}>{t.mapa}</a></li>
        </ul>
      ) : (
        <div className={`navbar-menu ${menuAbierto ? 'active' : ''}`}>
          {categorias.map(cat => (
            <button 
              key={cat} 
              className={`btn-cat-nav ${categoriaActual === cat ? 'activo' : ''}`}
              onClick={() => {
                setCategoria(cat);
                window.scrollTo(0, 0);
                cerrarMenu();
              }}
            >
              {t[cat] || cat}
            </button>
          ))}
        </div>
      )}

      {/* IDIOMAS INCORPORADOS */}
      <div className={`navbar-idiomas ${menuAbierto ? 'active' : ''}`}>
        {['es', 'en', 'fr', 'de'].map((idm) => (
          <button 
            key={idm}
            className={`btn-idioma ${idioma === idm ? 'activo' : ''}`} 
            onClick={() => { setIdioma(idm); cerrarMenu(); }}
          >
            {idm.toUpperCase()}
          </button>
        ))}
      </div>

      <div className={`hamburger ${menuAbierto ? 'open' : ''}`} onClick={() => setMenuAbierto(!menuAbierto)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

// --- COMPONENTE HOME ---
const Home = ({ t, idioma }) => (
  <>
    <section id="inicio" className="inicio-section">
      <div className="content">
        <h1>LA NOVA DOLCE</h1>
        <p className="subtitle">PIZZERIA - RESTAURANTE</p>
        <p className="date">Desde 1996</p>
      </div>
    </section>

    <section id="sobre-nosotros" className="sobre-nosotros">
      <div className="sobre-contenido">
        <div className="sobre-texto">
          <h2>{t.sobreNosotrosTitulo}</h2>
          <p>{t.sobreNosotrosTexto}</p>
          <div className="sellos-calidad">
            <span>📍 Santa Pola (Alicante)</span>
            <span>🍕 Masa Artesanal Diaria</span>
            <span>⏱️ Desde 1996</span>
          </div>
        </div>
        <div className="sobre-imagen">
          <img src={imagenHistoria} alt="Masa artesana La Nova Dolce" />
        </div>
      </div>
    </section>

    <div className="separador-contenedor-negro">
      <div className="separador-mostaza"></div>
    </div>

    <section id="info" className="info-seccion">
      <h2>{t.info}</h2>
      <div className="info-grid">
        {/* Tus cards de Horario, Eventos, Glovo... */}
        {/* (He omitido el contenido interno para abreviar el código, mantenlo igual) */}
        <div className="info-card">
          <h3>{t.horario}</h3>
          <div className="horario-fila">
            <span>Lun, Mié, Jue</span>
            <div className="turnos">
              <p>20:00 - 23:00</p>
            </div>
          </div>
          <div className="horario-fila">
            <span>Vie, Sáb, Dom</span>
            <div className="turnos">
              <p>13:00 - 16:00</p>
              <p>20:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="info-card">
          <h3>{t.eventos}</h3>
          <ul className="eventos-lista">
            <li>🎂 {t.normaTarta}</li>
            <li>🍼 {t.normaBebes}</li>
            <li>👥 {t.normaReservas}</li>
          </ul>
          <p className="eventos-intro">{t.eventosSub}</p>
        </div>
        <div className="info-card glovo-card">
          <h3>{t.glovoTitulo}</h3>
          <p>{t.glovoTexto}</p>
          <p className="txt-exclusivo">📍 {t.glovoExclusivo}</p>
          <a href="https://glovoapp.com/es/es/santa-pola/stores/la-nova-dolce-santa-pola" target="_blank" rel="noopener noreferrer" className="btn-glovo">
            {t.glovoBoton}
          </a>
        </div>
      </div>
    </section>

    <section id="carta" className="info-seccion">
      <h2>{t.carta}</h2>
      <div style={{ marginTop: '50px' }}>
        <Link to="/carta" className="btn-mostrar" onClick={() => window.scrollTo(0,0)}>
          {t.verCarta}
        </Link>
      </div>
    </section>

    <section id="contacto" className="mapa-seccion">
      <h2>{t.mapa}</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.97755362655556!2d-0.5537276520828864!3d38.19084508643081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd624c4d7b7c4185%3A0xc34fad40499659a2!2sLa%20Nova%20Dolce!5e0!3m2!1ses!2ses!4v1768302889580!5m2!1ses!2ses" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </section>
  </>
);

const PaginaCarta = ({ t, idioma, categoria }) => {
  const platosFiltrados = cartaPizzeria.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());

  return (
    <section id="carta" className="carta-container full-view">
      <div className="pizza-grid">
        {platosFiltrados.map((p) => (
          <div key={p.id} className="pizza-card">
            <div className="pizza-image-container">
              <img src={p.url} alt={p.nombre} className="pizza-img" />
            </div>
            <div className="pizza-info">
              <div className="card-header">
                <h3>{p.nombre}</h3>
                <span className="precio">
                  {typeof p.precio === 'object' 
                    ? `P: ${p.precio.pequena} / G: ${p.precio.grande}` 
                    : p.precio}
                </span>
              </div>
              <p className="descripcion">
                {idioma === 'es' ? p.desc_es : p.desc_en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE PRINCIPAL APP ---
function App() {
  const [idioma, setIdioma] = useState('es');
  const [categoria, setCategoria] = useState('Entrantes'); // Estado global de categoría
  const t = textos[idioma];

  return (
    <Router>

      <ScrollToTop />

      <Navbar 
        idioma={idioma} 
        setIdioma={setIdioma} 
        t={t} 
        setCategoria={setCategoria} 
        categoriaActual={categoria} 
      />
      <Routes>
        <Route path="/" element={<Home t={t} idioma={idioma} />} />
        <Route path="/carta" element={<PaginaCarta t={t} idioma={idioma} categoria={categoria} />} />
      </Routes>
    </Router>
  );
}

export default App;