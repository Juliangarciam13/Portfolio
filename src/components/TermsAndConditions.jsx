import '../styles/termsAndConditions.css';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import MainBanner from '../components/MainBanner';
import Menu from '../components/Menu';

const TermsAndConditions = () => {
    const { t } = useTranslation();
    return (
        <div id='termsConditions'>
            <Menu />
            <div id='termsContainer' className='p-5 mt-5 ms-5 me-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
                <section className='w-100 ps-5 pe-5 ms-5 me-5 mt-5'>
                    <h1 className='text-center p-3 fw-bold mt-5'>{t('termsConditions.termsConditionsTitle')}</h1>
                </section>
                <section className='ps-5 pe-5 ms-5 me-5'>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT1')}</h2>
                    <p>{t('termsConditions.termsConditionsP1')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT2')}</h2>
                    <p>{t('termsConditions.termsConditionsP2')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT3')}</h2>
                    <p>{t('termsConditions.termsConditionsP3')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT4')}</h2>
                    <p>{t('termsConditions.termsConditionsP4')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT5')}</h2>
                    <p>{t('termsConditions.termsConditionsP5')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT6')}</h2>
                    <p>{t('termsConditions.termsConditionsP6')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT7')}</h2>
                    <p>{t('termsConditions.termsConditionsP7')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT8')}</h2>
                    <p>{t('termsConditions.termsConditionsP8')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.termsConditionsT9')}</h2>
                    <p>{t('termsConditions.termsConditionsP9')}</p>
                </section>
                <section className='w-100 ps-5 pe-5 ms-5 me-5'>
                    <h1 className='text-center p-3 fw-bold'>{t('termsConditions.privacyPoliticsTitle')}</h1>
                </section>
                <section className='ps-5 pe-5 ms-5 me-5'>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.privacyPoliticsT1')}</h2>
                    <p>{t('termsConditions.privacyPoliticsP1')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.privacyPoliticsT2')}</h2>
                    <p>{t('termsConditions.privacyPoliticsP2')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.privacyPoliticsT3')}</h2>
                    <p>{t('termsConditions.privacyPoliticsP3')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.privacyPoliticsT4')}</h2>
                    <p>{t('termsConditions.privacyPoliticsP4')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.privacyPoliticsT5')}</h2>
                    <p>{t('termsConditions.privacyPoliticsP5')}</p>
                    <h2 className='pb-3 fw-bold text-start'>{t('termsConditions.privacyPoliticsT6')}</h2>
                    <p>{t('termsConditions.privacyPoliticsP6')}</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions;