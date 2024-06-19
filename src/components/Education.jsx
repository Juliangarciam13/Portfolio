import '../styles/education.css';
import Footer from './Footer';
import MainBanner from './MainBanner';
import { useTranslation } from 'react-i18next';
import educationMainBanner from '../assets/Education/mainBannerEducation.svg';
import { projects, studies, phrases } from '../scripts/data';
import Skills from './Skills';
import ProjectsSection from './ProjectsSection.jsx';

const Education = () => {

    const { t } = useTranslation();
    const homeTitle1 = t('mainBanner.educationTitle1');
    const homeTitle2 = t('mainBanner.educationTitle2');
    const homeTitle3 = t('mainBanner.educationTitle3');
    const homeTitle4 = t('mainBanner.educationTitle4');
    const homeTitle5 = t('mainBanner.educationTitle5');
    const homeTitle6 = t('mainBanner.educationTitle6');

    return (
        <div id="education" className='container-fluid m-0 p-0'>
            <MainBanner title1={homeTitle1} title2={homeTitle2} title3={homeTitle3} title4={homeTitle4} title5={homeTitle5} title6={homeTitle6} img={educationMainBanner} />
            <div id='textStudies' className='d-flex flex-column align-items-center justify-content-center p-5'>
                <h1 className='fw-bold pb-3'>Estudios</h1>
                <p className='text-center ps-5 pe-5'>Descubre las áreas clave de mi formación académica, donde la creatividad y la tecnología convergen para crear soluciones innovadoras, intuitivas y accesibles en el ámbito digital.</p>
            </div>
            <div id='studies' className='row justify-content-center'>
                {studies.map((study, index) => (
                    <div key={index} className='studiesCard col-lg-3 col-md-5 col-sm-10 m-3 p-4 shadow'>
                        <img src={study.img} className='w-25' />
                        <h5 className='fw-bold pt-3 pb-3'>{study.title}</h5>
                        <p>{study.text}</p>
                    </div>
                ))}
            </div>
            <Skills />
            <div id='textProjects' className='d-flex flex-column align-items-center justify-content-center p-5 mt-5 ms-5 me-5 d-none'>
                <h1 className='fw-bold pb-3'>Mis Proyectos</h1>
                <p className='text-center'>Explora una selección de mis proyectos más destacados en desarrollo frontend, diseño UI/UX, diseño web y desarrollo fullstack.</p>
            </div>
            <div id='projectsEducation' className='d-flex justify-content-center d-none'>
                <ul className='list-unstyled d-flex flex-wrap justify-content-center align-items-center pb-5 mb-5'>
                    {projects.map((project, index) => (
                        <li key={index} className='d-flex flex-column m-3 col-3 justify-content-center shadow'>
                            <img src={project.img} alt={project.name} className='skill-icon mb-2 w-100' />
                            <p className='ps-2'>{project.topic}</p>
                            <h3 className='ps-2'>{project.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            <ProjectsSection />
            <div id='phrases' className='d-flex justify-content-center flex-column align-items-center p-5 mt-5 mb-5'>
                <h1 className='fw-bold pb-3'>Frases</h1>
                <ul className='list-unstyled d-flex flex-wrap justify-content-center align-items-center'>
                    {phrases.map((phrase, index) => (
                        <li key={index} className='d-flex flex-column m-3 col-lg-3 col-sm-12 justify-content-center align-items-center shadow'>
                            <img src={phrase.img} alt={phrase.author} className='skill-icon mb-2 w-25' />
                            <p className='ps-5 pe-5 pt-3 pb-3 text-center'>{phrase.text}</p>
                            <h3 className='ps-2 fw-bold'>{phrase.author}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Education;