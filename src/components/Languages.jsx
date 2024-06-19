import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import '../styles/languages.css';

const Languages = () => {
    const { i18n } = useTranslation();// Se utiliza el hook useTranslation para acceder a la funcionalidad de i18next,
    const [showDropdown, setShowDropdown] = useState(false);

    // Se define un objeto con los códigos de idioma disponibles y sus nombres nativos.
    // Este objeto se utilizará para generar los botones de cambio de idioma.
    const lngs = {
        es: { nativeName: 'Español(es)' },  //Español
        en: { nativeName: 'English(en)' },  //Ingles
        pt: { nativeName: 'Português(pt)' }, //Portugués
        zh: { nativeName: '中文(zh)' },      // Chino
        ko: { nativeName: '한국어(ko)' },     // Coreano
        ja: { nativeName: '日本語(ja)' }    // Japonés
    };

   // Renderizar el componente del menú desplegable de idiomas
return (
    <div id='dropdownLanguages' className="dropdown">
        {/* Botón del menú desplegable */}
        <button className="dropdown-toggle"
                type="button" id="dropdownMenuButton"
                aria-haspopup="true" aria-expanded={showDropdown}
                onClick={() => setShowDropdown(!showDropdown)}>
            {/* Nombre del idioma actual */}
            {lngs[i18n.resolvedLanguage].nativeName}
        </button>
        
        {/* Menú desplegable */}
        <div className={`dropdown-menu${showDropdown ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
            {/* Mapear cada idioma para generar un elemento de menú */}
            {Object.keys(lngs).map((lng) => (
                <button key={lng} className="dropdown-item"
                        // Estilo para resaltar el idioma seleccionado
                        style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                        // Cambiar el idioma al hacer clic en un elemento del menú y ocultar el menú
                        onClick={() => {
                            i18n.changeLanguage(lng); // Cambiar el idioma
                            setShowDropdown(false); // Ocultar el menú desplegable
                        }}>
                    {/* Nombre del idioma */}
                    {lngs[lng].nativeName}
                </button>
            ))}
        </div>
    </div>
);

};

export default Languages;