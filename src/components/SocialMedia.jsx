import linkedIn from '../assets/SocialMedia/LinkedinCircle.png';
import instagram from '../assets/SocialMedia/LogoInstagram.svg';
import gitHub from '../assets/SocialMedia/GITHUB2.png';

const SocialMedia = () => {
    return (
        <ul id='socialMediaList' className='d-flex flex-row align-items-center p-0'>
            <a href='https://www.linkedin.com/in/juliangarciam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'><li><img className='social-icon' src={linkedIn} /></li></a>
            <a href='https://github.com/Juliangarciam13?tab=repositories' target='_blank'><li><img className='social-icon' src={gitHub} /></li></a>
            <a href='https://www.instagram.com/utha.co?igsh=MWVwbXF5YWpyaGs4cw%3D%3D&utm_source=qr' target='_blank'><li><img className='social-icon' src={instagram} /></li></a>
        </ul>
    )
}

export default SocialMedia;