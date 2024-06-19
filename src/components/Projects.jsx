import '../styles/projects.css';
import Footer from './Footer';
import MainBanner from './MainBanner';
import { useTranslation } from 'react-i18next';
import mainBannerProjects from '../assets/Projects/mainBannerProjects.svg';
import ProjectsSection from './ProjectsSection';

const Projects = () => {
    const { t } = useTranslation();
    const homeTitle1 = t('mainBanner.projectsTitle1');
    const homeTitle2 = t('mainBanner.projectsTitle2');
    const homeTitle3 = t('mainBanner.projectsTitle3');
    const homeTitle4 = t('mainBanner.projectsTitle4');
    const homeTitle5 = t('mainBanner.projectsTitle5');
    const homeTitle6 = t('mainBanner.projectsTitle6');

    return (
        <div id='projectsContainer' className='container-fluid p-0'>
            <MainBanner title1={homeTitle1} title2={homeTitle2} title3={homeTitle3} title4={homeTitle4} title5={homeTitle5} title6={homeTitle6} img={mainBannerProjects} />
            <ProjectsSection />
            <Footer />
        </div>
    )
}

export default Projects;