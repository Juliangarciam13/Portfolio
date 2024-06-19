import '../styles/footer.css';
import linkedIn from '../assets/SocialMedia/linkedInFooter.svg';
import instagram from '../assets/SocialMedia/instagramFooter.svg';
import gitHub from '../assets/SocialMedia/gitHubFooter.svg';
import { NavLink } from 'react-router-dom';
import logoUtha from '../assets/SocialMedia/LogoUthaBlanco.png';
import { useTranslation } from 'react-i18next';

const socialMediaLinks = {
    linkedIn: {
        link: "https://www.linkedin.com/company/ciaid/about/",
        image: linkedIn,
        alt: "LinkedIn Icon"
    },
    gitHub: {
        link: "https://twitter.com/CCiaid",
        image: gitHub,
        alt: "GitHub Icon"
    },
    youtube: {
        link: "https://www.youtube.com/channel/UCfy1mrSztrVaV94UEpVHYuA",
        image: instagram,
        alt: "Ibstagram Icon"
    }
};

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='containerFooter'>
            <footer className="text-light text-white text-center">
            <div className="container-fluid ps-5 pe-5">
                    <div className="contentFooter d-flex flex-row w-100">
                        <div id='logoText' className="col-sm-12 col-md-8 col-lg-4 col text-start">
                            <NavLink className='navbar-brand' to='/home'>
                                <img src={logoUtha} alt='logoUtha' className='logoUtha w-25' />
                            </NavLink>
                            <p className="text-lg-center d-none">{t('footer.textCiaid')}</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 col">
                            <ul className="list-footer text-center d-flex flex-row">
                                <NavLink className='nav-link text-light ps-0' activeClassName='active' to='/home'>
                                    <li>{t('footer.home')}</li>
                                </NavLink>
                                <NavLink className='nav-link text-light ps-0' activeClassName='active' to='/aboutus'>
                                    <li>{t('footer.aboutUs')}</li>
                                </NavLink>
                                <NavLink className='nav-link text-light ps-0' activeClassName='active' to='/investigation'>
                                    <li>{t('footer.services')}</li>
                                </NavLink>
                                <NavLink className='nav-link text-light ps-0' activeClassName='active' to='/privacypolicy'>
                                    <li>{t('footer.investigation')}</li>
                                </NavLink>
                                <NavLink className='nav-link text-light ps-0' activeClassName='active' to='/contact'>
                                    <li>{t('footer.contact')}</li>
                                </NavLink>
                            </ul>
                        </div>
                        <div id='contactList' className="col-lg-4 col-sm-12">
                            <ul className="text-light p-0">
                                <li className='socialMedia d-flex align-items-center justify-content-end'>
                                    <ul id='socialMedia' className='d-flex flex-row list-unstyled align-items-center justify-content-end'>
                                        {Object.entries(socialMediaLinks).map(([key, { link, image, alt }]) => (
                                            <li key={key} className='ps-1 pe-1'>
                                                <a href={link} target="_blank" rel="noopener noreferrer">
                                                    <img src={image} alt={alt} className="icon" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <button id='topButton' className='d-none btn btn-outline-success' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <i className="bi bi-arrow-up"></i>
                        </button>
                    </div>
                    <hr />
                    <div className="container-fluid pt-2">
                        <div className="row copyrightConditions text-dark">
                            <p className="col-lg-6 col-sm-12 text-start text-light p-0">{t('footer.allRightsReserved')}</p>
                            <NavLink id='terms' className='col-lg-6 col-sm-12 text-end d-flex align-items-center justify-content-end text-light p-0' activeClassName='active' to='/termsandconditions'>
                                <p>{t('footer.termsConditions')}</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;