// Importaciones de bibliotecas
import i18n from "i18next"; // Biblioteca principal de internacionalización
import { initReactI18next } from "react-i18next"; // Integración de i18next con React
import LanguageDetector from "i18next-browser-languagedetector"; // Detector de idioma basado en el navegador
import translationEN from "../locales/en/translation.json"; // Traducciones en inglés
import translationES from "../locales/es/translation.json"; // Traducciones en español
import translationPT from "../locales/pt/translation.json"; // Traducciones en portugués
import translationZH from "../locales/zh/translation.json"; // Traducciones en chino
import translationKO from "../locales/ko/translation.json"; // Traducciones en coreano
import translationJA from "../locales/ja/translation.json"; // Traducciones en japonés

// Definición de recursos de traducción para cada idioma admitido
const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
    pt: {
        translation: translationPT,
    },
    zh: {
        translation: translationZH,
    },
    ko: {
        translation: translationKO,
    },
    ja: {
        translation: translationJA,
    }
};

// Configuración de i18n
i18n
    .use(LanguageDetector) // Utilizar el detector de idioma
    .use(initReactI18next) // Integrar con React
    .init({
        resources, // Recursos de traducción
        debug: true, // Modo de depuración activado
        fallbackLng: "es", // Idioma de fallback
        lng: "es", // Idioma inicial
    });

// Exportar la instancia configurada de i18n para su uso en otros módulos
export default i18n;