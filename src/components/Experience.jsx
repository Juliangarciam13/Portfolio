import '../styles/experience.css';
import Footer from './Footer.jsx';
import MainBanner from './MainBanner.jsx';
import experienceMainBanner from '../assets/Experience/mainBannerExperience.svg';
import { useTranslation } from 'react-i18next';
import ExperienceSection from './ExperienceSection.jsx';
import Skills from './Skills.jsx';
import Statistics from './Statistics.jsx';
import ProjectsSection from './ProjectsSection.jsx';

const Experience = () => {
    const { t } = useTranslation();
    const homeTitle1 = t('mainBanner.homeTitle1');
    const homeTitle2 = t('mainBanner.homeTitle2');
    const homeTitle3 = t('mainBanner.homeTitle3');
    const homeTitle4 = t('mainBanner.homeTitle4');
    const homeTitle5 = t('mainBanner.homeTitle5');
    const homeTitle6 = t('mainBanner.homeTitle6');

    return (
        <div id='experienceContainer'>
            <MainBanner title1={homeTitle1} title2={homeTitle2} title3={homeTitle3} title4={homeTitle4} title5={homeTitle5} title6={homeTitle6} img={experienceMainBanner} />
            <ExperienceSection />
            <Skills />
            <Statistics />
            <ProjectsSection />
            <Footer />
        </div>
    )
}

export default Experience;