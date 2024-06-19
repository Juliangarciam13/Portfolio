import '../styles/termsAndConditions.css';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import MainBanner from '../components/MainBanner';
import banner from '../assets/Home/HomeSection1.png';

const TermsAndConditions = () => {
    const { t } = useTranslation();
    return (
        <div id='termsConditions'>
            <MainBanner imageSource={banner} backgroundType="image" title={t('mainBanner.termsConditions')} isTitleCentered={true} />
            <div id='termsContainer' className='p-5 ms-5 me-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
                <section className='w-100 ps-5 pe-5 ms-5 me-5'>
                    <h1 className='text-center p-3 fw-bold'>{t('termsConditions.termsConditionsTitle')}</h1>
                    <p className='pb-3 ps-5 pe-5'>{t('termsConditions.termsConditionsText')}</p>
                </section>
                <section className='ps-5 pe-5 ms-5 me-5'>
                    <h2 className='pb-3 fw-bold'>{t('termsConditions.intellectualPropertyTitle')}</h2>
                    <p>{t('termsConditions.intellectualPropertyText1')}</p>
                    <p>{t('termsConditions.intellectualPropertyText2')}</p>
                    <p>{t('termsConditions.intellectualPropertyText3')}</p>
                </section>
                <section className='ps-5 pe-5 ms-5 me-5'>
                    <h2 className='pb-3 fw-bold'>{t('termsConditions.dataProtectionTitle')}</h2>
                    <p>{t('termsConditions.dataProtectionText1')}</p>
                    <p>{t('termsConditions.dataProtectionText2')}</p>
                    <p>{t('termsConditions.dataProtectionText3')}</p>
                    <p>{t('termsConditions.dataProtectionText4')}</p>
                </section>
                <section className='w-100 mb-5 ps-5 pe-5 ms-5 me-5'>
                    <h2 className='pb-3 ps-5 pe-5 fw-bold'>{t('termsConditions.additionalTermsTitle')}</h2>
                    <p className='ps-5 pe-5'>{t('termsConditions.additionalTermsText1')}</p>
                    <p className='ps-5 pe-5'>{t('termsConditions.additionalTermsTex2')}</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions;