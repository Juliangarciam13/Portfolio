import '../styles/projects.css';
import { ecommerces } from '../scripts/data';
import { useNavigate } from 'react-router-dom';
import MainBanner from './MainBanner';
import selectAmico from '../assets/Projects/ecommerce.svg'; 
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

const Ecommerces = () => {

    const { t } = useTranslation();
    const homeTitle1 = t('mainBanner.ecommerceTitle1');
    const homeTitle2 = t('mainBanner.ecommerceTitle2');
    const homeTitle3 = t('mainBanner.ecommerceTitle3');
    const homeTitle4 = t('mainBanner.ecommerceTitle4');
    const homeTitle5 = t('mainBanner.ecommerceTitle5');
    const homeTitle6 = t('mainBanner.ecommerceTitle6');

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/projects');
    };

    return (
        <section id='ecommerce'>
        <div id='projectsContainer' className='container-fluid p-0'>
        <MainBanner title1={homeTitle1} title2={homeTitle2} title3={homeTitle3} title4={homeTitle4} title5={homeTitle5} title6={homeTitle6} img={selectAmico} />
        <section className="dark-section">
            <div id='projects' className='d-flex flex-column justify-content-center align-items-center pt-5'>
                <h2 className='fw-bold pb-3'>E-Commerce</h2>
                <div className='projects-container d-flex flex-column'>
                    {ecommerces.slice(0, 6).map((ecommerce, index) => (
                        <div key={index} className={`project-item d-flex flex-row align-items-center my-3 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                            <video autoPlay playsInline loop muted className='mb-2 w-50 mb-5 project-img' alt={ecommerce.title}>
                                <source src={ecommerce.video} type='video/mp4' />
                            </video>
                            <div id='textProjects' className={`d-flex flex-column text-start ${index % 2 === 1 ? 'pe-5' : 'ps-5'}`}>
                                <div id='titleProject'>
                                <h2 className='fw-bold'>0{ecommerce.num}</h2>
                                <h3>{ecommerce.title}</h3>
                                </div>
                                <p>{ecommerce.text}</p>
                                <a href={ecommerce.url} target="_blank" rel="noopener noreferrer">{ecommerce.url}</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='btn btn-primary' onClick={handleNavigate}>Ver más proyectos</button>
                </div>
            </div>
        </section>
        <Footer />
        </div>
        </section>
    )
}

export default Ecommerces;