import '../styles/menu.css';
import { NavLink } from 'react-router-dom';
import Languages from './Languages';
import { useTranslation } from 'react-i18next';
import logoUtha from '../assets/SocialMedia/LogoUtha.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Menu = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [navbarClass, setNavbarClass] = useState('navbar-light');

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const darkSections = document.querySelectorAll('.dark-section');

        let isInDarkSection = false;
        darkSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop && scrollTop <= sectionTop + sectionHeight) {
                isInDarkSection = true;
            }
        });

        if (isInDarkSection) {
            setNavbarClass('navbar-dark');
        } else {
            setNavbarClass('navbar-light');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getActiveClass = (path) => {
        switch (path) {
            case '/home':
                return 'active-blue';
            case '/projects':
                return 'active-green';
            case '/education':
                return 'active-orange';
            case '/experience':
                return 'active-red';
                case '/ecommerces':
                    return 'active-yellow';
            default:
                return '';
        }
    };

    return (
        <nav id='menu' className={`navbar navbar-expand-lg sticky-top align-items-center d-flex flex-column ${navbarClass}`}>
            <div id='logoContainer' className='container-fluid p-0 justify-content-center'>
                <NavLink className='navbar-brand d-flex align-items-center justify-content-center' to='/home'>
                    <img src={logoUtha} alt='logoUtha' className='logoUtha w-25' />
                </NavLink>
                <button className='navbar-toggler custom-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>
            <div className={`collapse navbar-collapse ${navbarClass}`} id='navbarNav'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                    <li className={`nav-item ${getActiveClass(location.pathname)}`}>
                        <NavLink className='nav-link' activeClassName='active' to='/home'>{t('menu.home')}</NavLink>
                    </li>
                    <li className={`nav-item dropdown ${getActiveClass(location.pathname)}`}>
                        <NavLink className='nav-link' activeClassName='active' to='/projects'>{t('menu.aboutUs')}</NavLink>
                    </li>
                    <li className={`nav-item dropdown ${getActiveClass(location.pathname)}`}>
                        <NavLink className='nav-link' activeClassName='active' to='/ecommerces'>{t('menu.ecommerce')}</NavLink>
                    </li>
                    <li className={`nav-item dropdown ${getActiveClass(location.pathname)}`}>
                        <NavLink className='nav-link' activeClassName='active' to='/education'>{t('menu.services')}</NavLink>
                    </li>
                    <li className={`nav-item dropdown ${getActiveClass(location.pathname)}`}>
                        <NavLink className='nav-link' activeClassName='active' to='/experience'>{t('menu.investigation')}</NavLink>
                    </li>
                    <li className={`nav-item d-none ${getActiveClass(location.pathname)}`}>
                        <NavLink className='nav-link' activeClassName='active' to='/contact'>{t('menu.contact')}</NavLink>
                    </li>
                    <li className='d-flex align-items-center d-none'><Languages /></li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
