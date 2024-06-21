import htmlLogo from '../assets/Skills/html.svg';
import cssLogo  from '../assets/Skills/css.svg';
import awsLogo  from '../assets/Skills/aws.svg';
import bootstrapLogo  from '../assets/Skills/bootstrap.svg';
import fastApiLogo  from '../assets/Skills/fastApi.svg';
import gitLogo  from '../assets/Skills/git.svg';
import i18NextLogo  from '../assets/Skills/i18Next.svg';
import javaScriptLogo  from '../assets/Skills/javaScript.svg';
import postgreSqlLogo  from '../assets/Skills/postgreSql.svg';
import pythonLogo  from '../assets/Skills/python.svg';
import reactLogo  from '../assets/Skills/react.svg';
import figmaLogo from '../assets/Skills/figma_logo.svg';
import shopifyLogo  from '../assets/Skills/shopify.svg';
import wordpressLogo  from '../assets/Skills/wordpress.svg';
import logoCiaid from '../assets/Experience/LogoCiaid.png';
import logoFire from '../assets/Experience/LogoFire.png';
import logo7hs from '../assets/Experience/Logo7hs.png';
import richard from '../assets/Education/RichardBranson.webp';
import mark from '../assets/Education/MarkZuckerberg.jpeg';
import steve from '../assets/Education/SteveJobs.webp';
import uiux from '../assets/Education/uiux.svg';
import webDesign from '../assets/Education/webDesign.svg';
import frontend from '../assets/Education/frontend.svg';
import fullstack from '../assets/Education/fullstack.svg';
import abogadocs from '../assets/Projects/abogadocs.mp4';
import calculadoraCalorias from '../assets/Projects/calculadoraCalorias.mp4';
import catalinaJaramillo from '../assets/Projects/catalinaJaramillo.mp4';
import ciaid from '../assets/Projects/ciaid.mp4';
import cryptoDashboard from '../assets/Projects/cryptoDashboard.mp4';
import letsBloom from '../assets/Projects/lestBloom.mp4';
import login from '../assets/Projects/login.mp4';
import piedraPapelTijera from '../assets/Projects/piedraPapelTijera.mp4';
import profile from '../assets/Projects/profile.mp4';
import selik from '../assets/Projects/selik.mp4';
import starwarsCard from '../assets/Projects/starwarsCard.mp4';
import triathlon from '../assets/Projects/triathlon.mp4';
import websiteStarwars from '../assets/Projects/websiteStarwars.mp4';
import websiteTravel from '../assets/Projects/websiteTravel.mp4';
import logoLawa from '../assets/Experience/Lawa.svg';
import wixLogo from '../assets/Skills/wix.svg';
import sevenHouseStore from '../assets/Projects/7hs.mp4';
import lawaLegal from '../assets/Projects/lawaLegal.mp4';
import talentoHumano from '../assets/Projects/talentoHumano.mp4';



export const skills = [
    {
        img: htmlLogo,
        name: "Html5",
    },
    {
        img: cssLogo,
        name: "Css3",
    },
    {
        img: bootstrapLogo,
        name: "Bootstrap",
    },
    {
        img: javaScriptLogo,
        name: "JavaScript",
    },
    {
        img: reactLogo,
        name: "React",
    },
    {
        img: i18NextLogo,
        name: "I18NExt",
    },
    {
        img: figmaLogo,
        name: "Figma",
    },
    {
        img: shopifyLogo,
        name: "Shopify",
    },
    {
        img: wordpressLogo,
        name: "Wordpress",
    },
    {
        img: wixLogo,
        name: "Wix",
    },
    {
        img: fastApiLogo,
        name: "FatsApi",
    },
    {
        img: postgreSqlLogo,
        name: "PostgreSql",
    },
    {
        img: pythonLogo,
        name: "Python",
    },
    {
        img: awsLogo,
        name: "AWS",
    },
    {
        img: gitLogo,
        name: "Git",
    }
];

export const ecommerces = [
    {
        video: letsBloom,
        num: 1,
        title: "Website Lets Bloom",
        text: "Desempeñé el rol de desarrollador fullstack, donde lideré la creación y despliegue de un sitio web multilingüe utilizando tecnologías modernas como React, HTML, CSS, JavaScript y Bootstrap. Implementé un backend robusto con FastAPI y PostgreSQL, y gestioné pruebas y APIs con Postman. Además, integré i18next para soportar traducción en seis idiomas, asegurando una experiencia de usuario global. La plataforma fue desplegada en AWS, garantizando su escalabilidad y disponibilidad. Este proyecto me permitió combinar mis habilidades técnicas para desarrollar una solución completa y funcional para una empresa de ingeniería avanzada.",
        url: "https://letsbloomfloral.com/",
        topic: "Frontend"
    },
    {
        video: lawaLegal,
        num: 2,
        title: "Website Lawa Legal",
        text: "Desarrollé una aplicación web utilizando React, JavaScript, HTML y CSS. Implementé la API de CoinGecko para obtener datos actualizados sobre criptomonedas y utilicé la biblioteca Chart.js para visualizar gráficos interactivos de precios. La aplicación permite a los usuarios buscar criptomonedas y ver sus tendencias de precios durante los últimos 30 días, proporcionando una herramienta útil para el análisis de mercado. Este proyecto demuestra mi habilidad para integrar múltiples tecnologías y APIs, creando una experiencia de usuario rica y funcional.",
        url: "https://www.lawa.com.co/",
        topic: "Frontend"
    },
    {
        video: sevenHouseStore,
        num: 3,
        title: "Website 7HS",
        text: "He desarrollado diversos proyectos de e-Commerce utilizando plataformas como WordPress, Shopify y Wix. Mi experiencia incluye la creación de tiendas en línea desde cero, el diseño de landing pages atractivas y funcionales, así como la implementación de funcionalidades avanzadas como pagos recurrentes, slides de imágenes automáticos, integración de pasarelas de pago y promociones interactivas como ruletas de descuentos. Además, he brindado asesorías personalizadas para optimizar la gestión y el rendimiento de las tiendas en línea, asegurando una experiencia de usuario fluida y eficiente.",
        url: "",
        topic: "Frontend"
    },
    {
        video: catalinaJaramillo,
        num: 4,
        title: "Landing Page Catalina Jaramillo",
        text: "Es una aplicación web que permite a los usuarios buscar libros en tres géneros diferentes utilizando la API de OpenLibrary. Algunos de estos libros están disponibles para descarga. Además, los usuarios pueden subir sus propios documentos, los cuales se almacenan y gestionan a través de la API de Filestack, permitiendo también la descarga posterior de estos archivos. Este proyecto combina funcionalidades avanzadas de búsqueda y gestión de documentos, ofreciendo una experiencia integral y eficiente para los usuarios interesados en leyes, política e historia. Para su desarrollo, utilicé tecnologías como HTML, CSS, React y Bootstrap.",
        url: "https://catalinajaramillo.us/pages/subscriptions" ,
        topic: "Frontend"
    },
    {
        video: selik,
        num: 5,
        title: "Landing Page Selik",
        text: "Es una aplicación web diseñada para aquellos interesados en la nutrición y el bienestar. La calculadora permite a los usuarios determinar su ingesta calórica diaria recomendada basada en varios factores. Fue construida utilizando tecnologías como HTML, CSS, JavaScript y el framework Bootstrap, y demuestra prácticas modernas de diseño web responsive. La aplicación tiene una estructura modular y presenta un diseño elegante y amigable para el usuario.",
        url: "https://selikskincare.com/pages/landing",
        topic: "Fontend"
    },
    {
        video: talentoHumano,
        num: 6,
        title: "Website Talento Humano",
        text: "Este es un juego de Piedra, Papel o Tijera implementado en Python con una interfaz gráfica de usuario (GUI) utilizando la librería Tkinter. El juego permite al usuario jugar contra la computadora eligiendo entre piedra, papel o tijera. Una vez que el usuario hace su elección, la computadora genera su propia elección de manera aleatoria. El juego muestra el resultado de cada ronda y permite jugar indefinidamente.",
        url: "https://talento-humano.co/",
        topic: "Frontend"
    }
]

export const studies = [
    {
        img: uiux,
        title: "Diseño UI/UX",
        text: "Completé un curso de Design Thinking en Udemy, aprendiendo a usar Figma para diseñar interfaces intuitivas y atractivas, y complementé mis estudios con Canva para crear experiencias visuales impactantes."
    },
    {
        img: webDesign,
        title: "Diseño Web",
        text: "Después de terminar un bootcamp de frontend, me especialicé en diseño web con Shopify y WordPress, dominando Liquid para Shopify y creando múltiples e-commerce. Completé un curso en Next U de desarrollo web."
    },
    {
        img: frontend,
        title: "Desarrollo Frontend",
        text: "Completé un bootcamp presencial donde aprendí HTML, CSS, lógica de programación, JavaScript y React, desarrollando varios proyectos. Además, implementé A-Frame para realidad virtual y i18next para traducciones."
    },
    {
        img: fullstack,
        title: "Desarrollo FullStack",
        text: "Completé un bootcamp virtual de fullstack y realicé 2 meses de prácticas, aprendiendo HTML, CSS, Bootstrap, JavaScript, React, Vue, Python, FastAPI, MySQL, lo que me permitió desarrollar aplicaciones robustas y escalables desde el backend hasta el frontend."
    },
];

export const phrases = [
    {
    img: richard,
    text: "El secreto de la innovación es pensar que hay una manera mejor de hacer todo. Nunca te conformes con el status quo.",
    author: "Richard Branson"
},
{
    img: steve,
    text: "La simplicidad puede ser más difícil de lograr que la complejidad: tienes que trabajar duro para limpiar tu pensamiento y hacerlo simple. Pero vale la pena al final porque una vez que llegas allí, puedes mover montañas.",
    author: "Steve Jobs"
},
{
    img: mark,
    text: "En un mundo que está cambiando realmente rápido, la única estrategia que está garantizada para fallar es no tomar riesgos.",
    author: "Mark Zuckerberg"
},
]


export const experiences = [
    {
        img: logoCiaid,
        job: "Desarrollador Fullstack",
        text: "En mi rol como desarrollador fullstack, tuve la oportunidad de crear un proyecto desde cero. Utilicé la herramienta de desarrollo Vite, en el Frontend aplique tecnologías como HTML, CSS, JavaScript, React y la integración de la herramienta de traducción i18next para ofrecer el sitio web en seis idiomas diferentes. En el backend, implementé una base de datos PostgreSQL, utilizando Postman para la interacción con la API, y también incorporé Python en el desarrollo. El objetivo principal del proyecto era crear el sitio web de la empresa CIAID. Durante el proceso, me encargué de diseñar y desarrollar la tabla para gestionar el boletín informativo. Esto permitió a los usuarios suscribirse al boletín. Además, integré herramientas como Google Analytics y Google Forms para mejorar la analítica y la recopilación de datos del sitio web. La web la desplegue en AWS utilizando S3, CloudFront y SSL."
    },
    {
        img: logoFire,
        job: "Desarrollador Web / Shopify - Wordpress",
        text: "En mi rol como desarrollador web, era responsable del desarrollo de proyectos de comercio electrónico, utilizando sistemas de gestión de contenidos como Shopify y WordPress con las tecnologías como HTML, CSS, JavaScript y Liquid. Asesoraba a los clientes de la empresa, enseñándoles a gestionar eficazmente sus tiendas en línea y a solucionar cualquier problema que pudiera surgir. Se me encomendó la creación de sitios web desde cero, el desarrollo de páginas de destino (Landing Page), la configuración de productos de pago recurrente, la gestión de inventarios, la actualización del contenido de los banners y la modificación del diseño y la estética generales de los sitios web. Al profundizar en estas responsabilidades, identifiqué varias áreas en las que los procesos de desarrollo podrían hacerse más eficientes. Para ello, propuse un plan de mejora integral para el departamento de desarrollo. Esto incluía establecer formularios de solicitud normalizados para los clientes,  recomendar la implantación de la herramienta de diseño Figma para mejorar la colaboración y agilizar el flujo de trabajo de diseño, metodología Scrum, herramienta de gestión de proyectos Trello, definición de actividades del equipo y aplicaciones recomendadas para mejorar el rendimiento de los E-Commerce. Adoptando un enfoque proactivo y presentando estas sugerencias constructivas, pude ayudar a optimizar la productividad del equipo y ofrecer un flujo de trabajo más fluido."
    },
    {
        img: logoLawa,
        job: "Desarrollador Web / Wix",
        text: "En mi rol como desaroolador web, desarrollé y diseñé un sitio web responsivo desde cero utilizando Wix. Implementé una estructura moderna y funcional que garantiza una experiencia de usuario óptima en cualquier dispositivo. Integré herramientas clave como Calendly para la gestión eficiente de citas, así como Google Analytics y Google Tag Manager para el seguimiento y análisis detallado del tráfico web y el comportamiento de los usuarios. Esta combinación de funcionalidades permitió a Lawa Legal optimizar sus operaciones y obtener valiosos insights sobre sus visitantes, mejorando así su estrategia de marketing digital y atención al cliente.",
    },
    {
        img: logo7hs,
        job: "Desarrollador Web / Shopify",
        text: "En mi rol como desarrollador web, tuve la oportunidad de crear una página web desde cero. Construí la estructura y funcionalidad básica del sitio web, me asegure de que fuera intuitivo y fácil de navegar para los usuarios. Implemente un sistema de comercio electrónico robusto, donde gestionaba el inventario de prendas de vestir de manera eficiente, pudiendo actualizar los banners promocionales y el contenido multimedia con facilidad. Para facilitar las transacciones, integre exitosamente la pasarela de pago de Mercado Pago, brindando a los clientes una experiencia de compra fluida y segura. Tuve la responsabilidad de diseñar las piezas digitales, como el logotipo de la marca y sus aplicaciones en diversos formatos, asegurándome de transmitir la identidad visual de la empresa de manera coherente y atractiva."
    }
];

export const blogs = [
    {
        img: htmlLogo,
        topic: "Frontend",
        date: "10 Nov, 2024",
        title: "Blog Frontend"
    },
    {
        img: htmlLogo,
        topic: "Frontend",
        date: "10 Nov, 2024",
        title: "Blog Frontend"
    },
    {
        img: htmlLogo,
        topic: "Frontend",
        date: "10 Nov, 2024",
        title: "Blog Frontend"
    }
];

export const projects = [
    {
        video: ciaid,
        num: 1,
        title: "Website CIAID",
        text: "Desempeñé el rol de desarrollador fullstack, donde lideré la creación y despliegue de un sitio web multilingüe utilizando tecnologías modernas como React, HTML, CSS, JavaScript y Bootstrap. Implementé un backend robusto con FastAPI y PostgreSQL, y gestioné pruebas y APIs con Postman. Además, integré i18next para soportar traducción en seis idiomas, asegurando una experiencia de usuario global. La plataforma fue desplegada en AWS, garantizando su escalabilidad y disponibilidad. Este proyecto me permitió combinar mis habilidades técnicas para desarrollar una solución completa y funcional para una empresa de ingeniería avanzada.",
        url: "https://www.ciaid.co/",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: cryptoDashboard,
        num: 2,
        title: "Crypto Dashboard",
        text: "Desarrollé una aplicación web utilizando React, JavaScript, HTML y CSS. Implementé la API de CoinGecko para obtener datos actualizados sobre criptomonedas y utilicé la biblioteca Chart.js para visualizar gráficos interactivos de precios. La aplicación permite a los usuarios buscar criptomonedas y ver sus tendencias de precios durante los últimos 30 días, proporcionando una herramienta útil para el análisis de mercado. Este proyecto demuestra mi habilidad para integrar múltiples tecnologías y APIs, creando una experiencia de usuario rica y funcional.",
        url: "https://bit.ly/GitHubCryptoDashboard",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: letsBloom,
        num: 3,
        title: "E-Commerce",
        text: "He desarrollado diversos proyectos de e-Commerce utilizando plataformas como WordPress, Shopify y Wix. Mi experiencia incluye la creación de tiendas en línea desde cero, el diseño de landing pages atractivas y funcionales, así como la implementación de funcionalidades avanzadas como pagos recurrentes, slides de imágenes automáticos, integración de pasarelas de pago y promociones interactivas como ruletas de descuentos. Además, he brindado asesorías personalizadas para optimizar la gestión y el rendimiento de las tiendas en línea, asegurando una experiencia de usuario fluida y eficiente.",
        url: "github",
        topic: "Frontend",
        isEcommerce: true,
    },
    {
        video: abogadocs,
        num: 4,
        title: "Abogadocs",
        text: "Es una aplicación web que permite a los usuarios buscar libros en tres géneros diferentes utilizando la API de OpenLibrary. Algunos de estos libros están disponibles para descarga. Además, los usuarios pueden subir sus propios documentos, los cuales se almacenan y gestionan a través de la API de Filestack, permitiendo también la descarga posterior de estos archivos. Este proyecto combina funcionalidades avanzadas de búsqueda y gestión de documentos, ofreciendo una experiencia integral y eficiente para los usuarios interesados en leyes, política e historia. Para su desarrollo, utilicé tecnologías como HTML, CSS, React y Bootstrap.",
        url: "https://bit.ly/GitHubAbogadocs" ,
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: calculadoraCalorias,
        num: 5,
        title: "Calculadora de Calorías",
        text: "Es una aplicación web diseñada para aquellos interesados en la nutrición y el bienestar. La calculadora permite a los usuarios determinar su ingesta calórica diaria recomendada basada en varios factores. Fue construida utilizando tecnologías como HTML, CSS, JavaScript y el framework Bootstrap, y demuestra prácticas modernas de diseño web responsive. La aplicación tiene una estructura modular y presenta un diseño elegante y amigable para el usuario.",
        url: "https://bit.ly/GitHubCalculadoraCalorias",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: piedraPapelTijera,
        num: 6,
        title: "Juego Piedra, Papel y Tijera",
        text: "Este es un juego de Piedra, Papel o Tijera implementado en Python con una interfaz gráfica de usuario (GUI) utilizando la librería Tkinter. El juego permite al usuario jugar contra la computadora eligiendo entre piedra, papel o tijera. Una vez que el usuario hace su elección, la computadora genera su propia elección de manera aleatoria. El juego muestra el resultado de cada ronda y permite jugar indefinidamente.",
        url: "https://bit.ly/GitHubGamePython",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: starwarsCard,
        num: 7,
        title: "Starwars Card",
        text: "Es una aplicación interactiva que permite a los usuarios explorar y conocer a los personajes de Star Wars de una manera divertida obteniendo la informacion de la API SWAPI. Al hacer clic en un botón, se pueden ver datos aleatorios de diferentes personajes de la saga. Esta aplicación se desarrolló utilizando HTML, CSS y JavaScript, proporcionando una experiencia dinámica y entretenida para los fans de Star Wars.",
        url: "https://bit.ly/GitHubStarwarsCard",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: websiteStarwars,
        num: 8,
        title: "Website Starwars",
        text: "Es una aplicación web que muestra tarjetas de personajes de Star Wars con información detallada obtenida de la API SWAPI. Los usuarios pueden desplazarse por las tarjetas de los personajes y utilizar botones para ver los personajes anteriores y siguientes. Este proyecto se desarrolló utilizando HTML, CSS y JavaScript, proporcionando una experiencia interactiva y atractiva para los fans de la saga.",
        url: "https://bit.ly/GitHubWebStarwars",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: websiteTravel,
        num: 9,
        title: "Website Viajes",
        text: "Es una página web diseñada para entusiastas de los viajes. Construida utilizando HTML, CSS y el framework Bootstrap, este sitio demuestra prácticas modernas de diseño web responsivo. Ofrece una estructura modular y estilos elegantes, proporcionando a los usuarios una experiencia de navegación intuitiva y atractiva mientras planifican sus próximas aventuras.",
        url: "https://bit.ly/GitHubWebTravel",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: profile,
        num: 10,
        title: "Personal Profile",
        text: "Es una aplicación de perfil personal que permite a los usuarios completar entradas para su nombre, apellidos, correo electrónico, contraseña, ciudad, entre otros datos. La aplicación incluye validaciones en las entradas numéricas para garantizar que solo se ingresen números. Desarrollada con HTML, CSS, JavaScript y React, esta herramienta proporciona una interfaz amigable y eficiente para la gestión de información personal.",
        url: "https://bit.ly/GitHubPersonalProfile",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: login,
        num: 11,
        title: "Login",
        text: "Login App es una aplicación de inicio de sesión que permite a los usuarios introducir su correo electrónico y contraseña para iniciar sesión. Después de iniciar sesión con éxito, aparece una alerta de bienvenida, y al hacer clic en 'Aceptar', el usuario es dirigido a mis repositorios de GitHub. La aplicación está desarrollada con CSS, HTML, JavaScript y React, y se ha importado una biblioteca de estilos de Ed Team para mejorar el aspecto visual.",
        url: "https://bit.ly/GitHubLogin",
        topic: "Frontend",
        isEcommerce: false,
    },
    {
        video: triathlon,
        num: 12,
        title: "Website Triathlon",
        text: "Es uno de mis primeros proyectos, donde desarrollé una serie de cuatro archivos HTML con estilos CSS que navegan entre sí. En estos archivos, puedes encontrar información detallada sobre los triatlones y los deportes que comprenden. Además, he incluido una sección donde cuento un poco sobre mí y un archivo de contacto. Este proyecto refleja mis primeros pasos en el desarrollo web, y desde entonces, he mejorado significativamente mis habilidades y conocimientos.",
        url: "https://bit.ly/GitHubTriathlon",
        topic: "Frontend",
        isEcommerce: false,
    },
];