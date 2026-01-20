// Importación de imágenes
import glutenImg from '../assets/Alergenos/Gluten.png';
import lacteosImg from '../assets/Alergenos/Lacteos.png';
import huevosImg from '../assets/Alergenos/Huevos.png';
import pescadoImg from '../assets/Alergenos/Pescado.png';
import crustaceosImg from '../assets/Alergenos/Crustaceos.png';
import moluscosImg from '../assets/Alergenos/Moluscos.png';
import cacahuetesImg from '../assets/Alergenos/Cacahuetes.png';
import sojaImg from '../assets/Alergenos/Soja.png';
import frutosCascarImg from '../assets/Alergenos/FrutosDeCascara.png';
import apioImg from '../assets/Alergenos/Apio.png';
import mostazaImg from '../assets/Alergenos/Mostaza.png';
import sesamoImg from '../assets/Alergenos/GranosDeSesamo.png';
import sulfitosImg from '../assets/Alergenos/DioxidoDeAzufreYSulfitos.png';
import altramucesImg from '../assets/Alergenos/Altramuces.png';

export const textosAlergenos = {
    titulo: {
        es: 'Leyenda de Alérgenos', 
        en: 'Allergen Legend', 
        fr: 'Légende des Allergènes', 
        de: 'Allergen-Legende' 
    },
    descripcion: {
        es: 'Consulte con nuestro personal ante cualquier duda sobre alergias.', 
        en: 'Please consult our staff regarding any allergy concerns.', 
        fr: 'Veuillez consulter notre personnel pour toute question concernant les allergies.', 
        de: 'Bitte wenden Sie sich bei Fragen zu Allergien an unser Personal.' 
    }
};

export const listaAlergenos = [
    
    { 
        id: 'lacteos', 
        url: lacteosImg, 
        nombre: { 
        es: 'Lácteos', 
        en: 'Dairy', 
        fr: 'Produits laitiers', 
        de: 'Milchprodukte' 
        } 
    },
    { 
        id: 'gluten', 
        url: glutenImg, 
        nombre: { 
        es: 'Gluten', 
        en: 'Gluten', 
        fr: 'Gluten', 
        de: 'Gluten' 
        } 
    },
    { 
        id: 'huevos', 
        url: huevosImg, 
        nombre: { 
        es: 'Huevos', 
        en: 'Eggs', 
        fr: 'Œufs', 
        de: 'Eier' 
        } 
    },
    { 
        id: 'pescado', 
        url: pescadoImg, 
        nombre: { 
        es: 'Pescado', 
        en: 'Fish', 
        fr: 'Poisson', 
        de: 'Fisch' 
        } 
    },
    { 
        id: 'crustaceos', 
        url: crustaceosImg, 
        nombre: { 
        es: 'Crustáceos', 
        en: 'Crustaceans', 
        fr: 'Crustacés', 
        de: 'Krebstiere' 
        } 
    },
    { 
        id: 'moluscos', 
        url: moluscosImg, 
        nombre: { 
        es: 'Moluscos', 
        en: 'Molluscs', 
        fr: 'Mollusques', 
        de: 'Weichtiere' 
        } 
    },
    { 
        id: 'cacahuetes', 
        url: cacahuetesImg, 
        nombre: { 
        es: 'Cacahuetes', 
        en: 'Peanuts', 
        fr: 'Cacahuètes', 
        de: 'Erdnüsse' 
        } 
    },
    { 
        id: 'soja', 
        url: sojaImg, 
        nombre: { 
        es: 'Soja', 
        en: 'Soy', 
        fr: 'Soja', 
        de: 'Soja' 
        } 
    },
    { 
        id: 'frutos_cascara', 
        url: frutosCascarImg, 
        nombre: { 
        es: 'Frutos de Cáscara', 
        en: 'Nuts', 
        fr: 'Fruits à coque', 
        de: 'Schalenfrüchte' 
        } 
    },
    { 
        id: 'apio', 
        url: apioImg, 
        nombre: { 
        es: 'Apio', 
        en: 'Celery', 
        fr: 'Céleri', 
        de: 'Sellerie' 
        } 
    },
    { 
        id: 'mostaza', 
        url: mostazaImg, 
        nombre: { 
        es: 'Mostaza', 
        en: 'Mustard', 
        fr: 'Moutarde', 
        de: 'Senf' 
        } 
    },
    { 
        id: 'sesamo', 
        url: sesamoImg, 
        nombre: { 
        es: 'Sésamo', 
        en: 'Sesame', 
        fr: 'Sésame', 
        de: 'Sesam' 
        } 
    },
    { 
        id: 'sulfitos', 
        url: sulfitosImg, 
        nombre: { 
        es: 'Sulfitos', 
        en: 'Sulphites', 
        fr: 'Sulfites', 
        de: 'Sulfite' 
        } 
    },
    { 
        id: 'altramuces', 
        url: altramucesImg, 
        nombre: { 
        es: 'Altramuces', 
        en: 'Lupins', 
        fr: 'Lupins', 
        de: 'Lupinen' 
        } 
    }
];