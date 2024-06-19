import '../styles/mainBanner.css';
import Menu from './Menu';

const Banner = ({ title1, title2, title3, title4, title5, title6, img }) => {
    return (
        <div className="container-fluid m-0 p-0 w-100">
            <Menu />
            <div className="mainBanner d-flex flex-row p-5">
                <div className='bannerContent col-lg-6 col-md-4 d-flex flex-column align-items-start ps-5'>
                    <div className='h1Container d-flex flex-row'><h1>{title1}</h1><h1 className='titleColor ps-2'>{title2}</h1></div>
                    <div className='h1Container d-flex flex-row'><h1 className='titleColor'>{title3}</h1><h1 className='ps-2'>{title4}</h1></div>
                    <div className='h1Container d-flex flex-row'><h1>{title5}</h1><h1 className='titleColor ps-2'>{title6}</h1></div>
                </div>
                <div id='imgBanner' className='col-lg-6 col-md-4 d-flex align-items-center justify-content-center'>
                    <img src={img} className='img-fluid w-75' alt='Banner' />
                </div>
            </div>
        </div>
    );
};

export default Banner;