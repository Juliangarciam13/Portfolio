import '../styles/home.css';
import Footer from './Footer';
import MainBanner from './MainBanner';
import { useTranslation } from 'react-i18next';
import Carousel from './Carousel';
import Statistics from '../components/Statistics.jsx';
import mainBannerHome from '../assets/Home/mainBannerHome.svg';
import SocialMedia from '../components/SocialMedia.jsx';
import homeProfile from '../assets/Home/HomeProfile.png';
import ProjectsSection from '../components/ProjectsSection.jsx';
import Skills from './Skills.jsx';
import ExperienceSection from './ExperienceSection.jsx';

const Home = () => {

    const { t } = useTranslation();
    const homeTitle1 = t('mainBanner.homeTitle1');
    const homeTitle2 = t('mainBanner.homeTitle2');
    const homeTitle3 = t('mainBanner.homeTitle3');
    const homeTitle4 = t('mainBanner.homeTitle4');
    const homeTitle5 = t('mainBanner.homeTitle5');
    const homeTitle6 = t('mainBanner.homeTitle6');

    return (
        <div id='home' className='container-fluid m-0 p-0'>
            <MainBanner title1={homeTitle1} title2={homeTitle2} title3={homeTitle3} title4={homeTitle4} title5={homeTitle5} title6={homeTitle6} img={mainBannerHome} />
            <div id='aboutMeContainer' className='d-flex flex-row'>
                <div className='col-lg-6 col-sm-12 d-flex flex-column align-items-center justify-content-start'>
                    <img src={homeProfile} className='w-75 p-2 profilesImg' />
                    <SocialMedia />
                </div>
                <div id='aboutMe' className='col-lg-5 col-sm-12'>
                    <h2 className='textBlue fw-bold pb-3'>
                        Sobre <span>Mí</span>
                    </h2>
                    <p>
                        Soy un profesional multidisciplinario especializado en el desarrollo de software, con una sólida formación en marketing y diseño digital. Mi experiencia en marketing me ha equipado con un profundo entendimiento de branding y estrategias de comunicación efectivas, mientras que mi pasión por el diseño digital me ha permitido crear experiencias visuales impactantes y funcionales utilizando herramientas como Figma.
                        <br /><br />
                        Mi trayectoria incluye roles significativos en el desarrollo de marcas y proyectos digitales. Completé un bootcamp de frontend de 6 meses, que me preparó para trabajar en una agencia de marketing digital y desarrollo web. En esta agencia, manejé proyectos en Shopify y WordPress, desarrollando ecommerces desde la conceptualización hasta el lanzamiento. Aquí, adquirí habilidades en CSS, Bootstrap, HTML y JavaScript, y ofrecí asesorías sobre el manejo de ecommerce, incluyendo la implementación de membresías con cobros recurrentes.
                        <br /><br />
                        Después de mi primer bootcamp y el trabajo en la agencia, completé un bootcamp de fullstack de 4 meses. Posteriormente, realicé prácticas en una empresa donde desarrollé un proyecto desde cero utilizando React, HTML, CSS, JavaScript, FastAPI, PostgreSQL, Postman, i18next, Git y Python. Desplegué el proyecto en AWS utilizando S3, CloudFront y SSL.
                    </p>
                </div>
            </div>
            <Skills />
            <ProjectsSection />
            <ExperienceSection />
            <Statistics />
            <div id='carousel' className='container-fluid w-100 p-5'>
                <Carousel />
            </div>
            <Footer />
        </div>
    )
}

export default Home;