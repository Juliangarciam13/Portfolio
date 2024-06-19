import 'slick-carousel/slick/slick.css'; // Estilos del carrusel
import 'slick-carousel/slick/slick-theme.css'; // Tema del carrusel
import Slider from 'react-slick'; // Componente Slider de react-slick
import logo1 from '../assets/Logos/G_Simetrik.png';
import logo2 from '../assets/Logos/G_VR.png';
import logo3 from '../assets/Logos/G_Zhana.png';
import logo4 from '../assets/Logos/G_JA.png';
import logo5 from '../assets/Logos/G_Agreecol.png';
import logo6 from '../assets/Logos/G_Clarket.png';
import logo7 from '../assets/Logos/G_Ibisa.png';
import logo8 from '../assets/Logos/G_Parsons.png';
import logo9 from '../assets/Logos/G_Segen.png';
import logo10 from '../assets/Logos/G_Swiss.png';
import logo11 from '../assets/Logos/G_TM.png';
import logo12 from '../assets/Logos/G_TPC.png';
import logo13 from '../assets/Logos/G_Wooshin.png';

// Array de logotipos
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13];

// Componente Carousel
const Carousel = () => {
    // Configuración del carrusel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    // Renderizar el carrusel con los logotipos
    return (
        <div className='carousel-container p-5'>
            {/* Componente Slider con la configuración especificada */}
            <Slider {...settings}>
                {/* Mapear cada logotipo del array 'logos' para generar un elemento de carrusel */}
                {logos.map((logo, index) => (
                    <div id='logos' key={index} className='carousel-item d-flex justify-content-center align-items-center mb-5'>
                        {/* Mostrar el logotipo como una imagen */}
                        <img style={{ width: '60%' }} src={logo} alt='Logos' />
                    </div>
                ))}
            </Slider>
        </div>
    )
};

export default Carousel;