import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import './navBar.css';
import { cartaPizzeria } from './DataMain/dataPizzas.js';
import { textosPlatos } from './DataMain/textosPlatos.js';
import { textosMain } from './DataMain/textosMain.js';
import { textosAlergenos, listaAlergenos } from './DataMain/textosAlergenos.js';
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
  const categorias = ['Entrantes', 'Ensaladas', 'Pizzas', 'Pastas', 'Carnes', 'Salsas', 'Postres', 'Bebidas', 'Vinos'];

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoPizzeria} alt="Logo" className="logo-img" />
        </Link>
      </div>
      {!esCarta ? (
        <>
        {/* EL MENÚ DE ESCRITORIO: Siempre renderizado */}
          <div className="navbar-menu">
            <button className="btn-cat-nav" onClick={() => { window.location.href = "/#inicio"; cerrarMenu(); }}>{t.inicio}</button>
            <button className="btn-cat-nav" onClick={() => { window.location.href = "/#info"; cerrarMenu(); }}>{t.info}</button>
            <button className="btn-cat-nav" onClick={() => { window.location.href = "/#carta"; cerrarMenu(); }}>{t.carta}</button>
            <button className="btn-cat-nav" onClick={() => { window.location.href = "/#contacto"; cerrarMenu(); }}>{t.mapa}</button>
          </div>

          {/* EL MENÚ MÓVIL: Siempre renderizado, animado por CSS con la clase 'active' */}
          <div className={`navbar-mobile-background ${menuAbierto ? 'active' : ''}`}>
            <div className="navbar-mobile-sections-home">
              <button className="btn-cat-nav" onClick={() => { window.location.href = "/#inicio"; cerrarMenu(); }}>{t.inicio}</button>
              <button className="btn-cat-nav" onClick={() => { window.location.href = "/#info"; cerrarMenu(); }}>{t.info}</button>
              <button className="btn-cat-nav" onClick={() => { window.location.href = "/#carta"; cerrarMenu(); }}>{t.carta}</button>
              <button className="btn-cat-nav" onClick={() => { window.location.href = "/#contacto"; cerrarMenu(); }}>{t.mapa}</button>
            </div>

            <div className="navbar-mobile-idiomas">
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
          </div>
        </>
      ) : (
        <>
          <div className="navbar-menu">
            {categorias.map(cat => (
              <button 
                key={cat} 
                className={`btn-cat-nav ${categoriaActual === cat ? 'activo' : ''}`}
                onClick={() => { setCategoria(cat); window.scrollTo(0, 0); }}
              >
                {t[cat] || cat}
              </button>
            ))}
          </div>

          {/* 2. Menú móvil lateral (Siempre presente, animado por CSS con 'active') */}
          <div className={`navbar-mobile-background ${menuAbierto ? 'active' : ''}`}>
            
            {/* Botón de inicio con la raya mostaza */}
            <button 
              className="btn-cat-nav inicio" 
              onClick={() => { window.location.href = "/#inicio"; cerrarMenu(); }}
            >
              {t.inicio || "INICIO"}
            </button>

            {/* Contenedor que ocupa el alto restante */}
            <div className="navbar-mobile-sections">
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

            {/* Idiomas abajo */}
            <div className="navbar-mobile-idiomas">
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
          </div>
        </>
        
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
        <p className="subtitle">{t.subtitulo}</p>
        <p className="date">{t.fecha}</p>
      </div>
    </section>

    <section id="sobre-nosotros" className="sobre-nosotros">
      <div className="sobre-contenido">
        <div className="sobre-texto">
          <h2>{t.sobreNosotrosTitulo}</h2>
          <p>{t.sobreNosotrosTexto}</p>
          <div className="sellos-calidad">
            <span>📍 Santa Pola (Alicante)</span>
            <span>🍕 {t.sobreNosotrosMasa}</span>
            <span>⏱️ {t.fecha}</span>
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
          
          <div className="horario-compacto">
            <div className="horario-linea">
              <span className="dia">{t.lunes}: </span>
              <span className="horas">20:00 - 23:00</span>
            </div>

            <div className="horario-linea cerrado">
              <span className="dia">{t.martes}: </span>
              <span className="horas">{t.cerrado}</span>
            </div>

            <div className="horario-linea">
              <span className="dia">{t.miercoles}: </span>
              <span className="horas">20:00 - 23:00</span>
            </div>

            <div className="horario-linea">
              <span className="dia">{t.jueves}: </span>
              <span className="horas">20:00 - 23:00</span>
            </div>

            <div className="horario-linea">
              <span className="dia">{t.viernes}: </span>
              <span className="horas">13:00-16:00 / 20:00-23:00</span>
            </div>

            <div className="horario-linea">
              <span className="dia">{t.sabado}: </span>
              <span className="horas">13:00-16:00 / 20:00-23:00</span>
            </div>

            <div className="horario-linea">
              <span className="dia">{t.domingo}: </span>
              <span className="horas">13:00-16:00 / 20:00-23:00</span>
            </div>
          </div>
        </div>
        <div className="info-card">
          <h3>{t.eventos}</h3>
          
          <ul className="eventos-lista">
            <li>
              <span className="evento-texto">🎂 {t.normaTarta}</span>
            </li>
            <li>
              <span className="evento-texto">🍼 {t.normaBebes}</span>
            </li>
            <li>
              <span className="evento-texto">👥 {t.normaReservas}</span>
            </li>
          </ul>

          {/* Ahora el texto intro está abajo del todo */}
          <p className="eventos-intro">{t.eventosSub}</p>
        </div>
        <div className="info-card glovo-card">
          <h3>{t.glovoTitulo}</h3>
          <p>{t.glovoTexto}</p>
          <p className="txt-exclusivo">📍 {t.glovoExclusivo}</p>
          <p className="txt-exclusivo">⏱️ {t.glovoTiempo}</p>
          <a href="https://glovoapp.com/es/es/santa-pola/stores/la-nova-dolce-santa-pola" target="_blank" rel="noopener noreferrer" className="btn-glovo">
            {t.glovoBoton}
          </a>
          
        </div>
      </div>
    </section>

    <div className="separador-contenedor-negro">
      <div className="separador-mostaza"></div>
    </div>

    <section id="carta" className="info-seccion carta-preview">
      <h2>{t.carta}</h2>
      
      <div className="carta-intro">
        <p>
          {t.cartaDescripcion} 
          <strong> {t.cartaCalidad}</strong>
        </p>
        <p className="p-resalte">{t.cartaPregunta}</p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <Link to="/carta" className="btn-mostrar" onClick={() => window.scrollTo(0, 0)}>
          {t.verCarta}
        </Link>
      </div>
    </section>

    <div className="separador-contenedor-negro">
      <div className="separador-mostaza"></div>
    </div>

    <section id="contacto" className="info-seccion contacto-seccion">
      <h2>{t.mapa}</h2>

      <div className="contacto-container">
        {/* Columna de Información */}
        <div className="contacto-info">
          <div className="info-bloque-central"> {/* Contenedor para alinear todo el bloque */}
            <div className="info-item">
              <span className="icon">📍</span>
              <p>{t.contactoDireccion}</p>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
              <div className="telefonos">
                <a href="tel:965416041">965 41 60 41</a>
                <a href="tel:966694073">966 69 40 73</a>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">✉️</span>
              <p>pizzerianovadolce@gmail.com</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" className="social-icon">Facebook</a>
            <a href="https://instagram.com" target="_blank" className="social-icon">Instagram</a>
          </div>
        </div>

        {/* Columna del Mapa */}
        <div className="mapa-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.5323537233!2d-0.5601131!3d38.1975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6248da509c6933%3A0xc6657c917957905d!2sC%2F%20Casta%C3%B1os%2C%2034%2C%2003130%20Santa%20Pola%2C%20Alicante!5e0!3m2!1ses!2ses!4v1700000000000" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  </>
);

const PaginaCarta = ({ t, idioma, categoria }) => {
  // 1. Filtrado inicial por categoría
  const platosFiltrados = cartaPizzeria.filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
  );

  const salsasCalientes = platosFiltrados.filter((p) => p.id >= 600 && p.id < 603);
  const salsasFrias = platosFiltrados.filter((p) => p.id >= 603);

  const pastaEspecial = platosFiltrados.filter((p) => p.id >= 404);
  const pastaNormal = platosFiltrados.filter((p) => p.id < 404);

  const postresCaseros = platosFiltrados.filter((p) => p.id <= 706);
  const postresCreps = platosFiltrados.filter((p) => p.id > 706 && p.id < 711);
  const postresPizzas = platosFiltrados.filter((p) => p.id === 711);

  // 3. Función interna para renderizar cada tarjeta (mantiene tu estructura original)
  const renderCard = (p) => {
    const info = textosPlatos[p.id];
    const nombre = info?.nombre[idioma] || "Nombre no definido";
    const descripcion = info?.descripcion[idioma] || "";

    return (
      <div key={p.id} className="pizza-card">
        <div className="pizza-image-container">
          <img src={p.url} alt={nombre} className="pizza-img" />
        </div>

        <div className="pizza-info">
          <div className="card-header">
            <h3>{nombre}</h3>
            <span className="precio">
              {typeof p.precio === "object"
                ? `${textosMain[idioma].pequeña}: ${p.precio.pequena} / ${textosMain[idioma].grande}: ${p.precio.grande}`
                : `${p.precio}€`}
            </span>
          </div>

          <p className="descripcion">{descripcion}</p>

          <div className="plato-alergenos">
            {p.alergenos?.map((alergenoId) => {
              const infoAlergeno = listaAlergenos.find((a) => a.id === alergenoId);
              return infoAlergeno ? (
                <img
                  key={alergenoId}
                  src={infoAlergeno.url}
                  alt={infoAlergeno.nombre[idioma]}
                  title={infoAlergeno.nombre[idioma]}
                  className="alergeno-icon-plato"
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="carta" className="carta-container full-view">
      {/* --- AVISOS SUPERIORES --- */}
      {categoria === "Pizzas" && (
        <div className="aviso-cambio-precio">
          <p>{textosMain[idioma].incrementoDelPrecio}</p>
        </div>
      )}
      {categoria === "Ensaladas" && (
        <div className="aviso-cambio-precio">
          <p>{textosMain[idioma].incrementoDelPrecio}</p>
          <p>{textosMain[idioma].consultarSalsas}</p>
        </div>
      )}
      {(categoria === "Entrantes" ||
        categoria === "Carnes" ||
        categoria === "Pastas") && (
        <div className="aviso-cambio-precio">
          <p>{textosMain[idioma].consultarSalsas}</p>
        </div>
      )}
      {categoria === "Postres" && (
        <div className="aviso-cambio-precio">
          <p>{textosMain[idioma].postresCaseros}</p>
        </div>
      )}

      {/* --- RENDERIZADO CONDICIONAL --- */}
      
      {/* CASO A: SALSAS */}
      {categoria === "Salsas" && (
        <>
          <h2 className="titulo-subcategoria">{idioma === "es" ? "Salsas Calientes" : "Warm Sauces"}</h2>
          <div className="pizza-grid pizzas">{salsasCalientes.map((p) => renderCard(p))}</div>
          <h2 className="titulo-subcategoria" style={{ marginTop: "50px" }}>{idioma === "es" ? "Salsas Frías" : "Cold Sauces"}</h2>
          <div className="pizza-grid pizzas">{salsasFrias.map((p) => renderCard(p))}</div>
        </>
      )}

      {/* CASO B: PASTAS */}
      {categoria === "Pastas" && (
        <>
          <div className="pizza-grid pizzas">{pastaNormal.map((p) => renderCard(p))}</div>
          <h2 className="titulo-subcategoria" style={{ marginTop: "50px" }}>MACARRONES, ESPAGUETIS O RIGATONI</h2>
          <div className="pizza-grid pizzas">{pastaEspecial.map((p) => renderCard(p))}</div>
        </>
      )}

      {/* CASO C: POSTRES */}
      {categoria === "Postres" && (
        <>
          <div className="pizza-grid pizzas">{postresCaseros.map((p) => renderCard(p))}</div>
          <h2 className="titulo-subcategoria" style={{ marginTop: "50px" }}>CREPS</h2>
          <div className="pizza-grid pizzas">{postresCreps.map((p) => renderCard(p))}</div>
          <h2 className="titulo-subcategoria" style={{ marginTop: "50px" }}>PIZZAS</h2>
          <div className="pizza-grid pizzas">{postresPizzas.map((p) => renderCard(p))}</div>
        </>
      )}
      
      {!["Salsas", "Pastas", "Postres"].includes(categoria) && (
        <div className={`pizza-grid ${["Pizzas", "Entrantes", "Carnes", "Ensaladas"].includes(categoria) ? "pizzas" : ""}`}>
          {platosFiltrados.map((p) => renderCard(p))}
        </div>
      )}

      {/* --- AVISOS INFERIORES --- */}
      {categoria === "Pizzas" && (
        <div className="aviso-cambio-precio">
          <p>{textosMain[idioma].incrementoDelPrecio}</p>
        </div>
      )}
      {categoria === "Ensaladas" && (
        <div className="aviso-cambio-precio">
          <p>{textosMain[idioma].incrementoDelPrecio}</p>
          <p>{textosMain[idioma].consultarSalsas}</p>
        </div>
      )}
      {(categoria === "Entrantes" ||
        categoria === "Carnes" ||
        categoria === "Pastas") && (
        <div className="aviso-cambio-precio">
          <p>{textosMain[idioma].consultarSalsas}</p>
        </div>
      )}

      {/* --- SECCIÓN ALÉRGENOS --- */}
      <div className="seccion-alergenos">
        <h3>{textosAlergenos.titulo[idioma]}</h3>
        <div className="alergenos-grid-completo">
          {listaAlergenos.map((item) => (
            <div key={item.id} className="alergeno-item-mini">
              <img src={item.url} alt={item.nombre[idioma]} />
              <span>{item.nombre[idioma]}</span>
            </div>
          ))}
        </div>
        <p className="aviso-alergenos">{textosAlergenos.descripcion[idioma]}</p>
      </div>
    </section>
  );
};

// --- COMPONENTE PRINCIPAL APP ---
function App() {
  const [idioma, setIdioma] = useState('es');
  const [categoria, setCategoria] = useState('Entrantes'); // Estado global de categoría
  const t = textosMain[idioma];

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