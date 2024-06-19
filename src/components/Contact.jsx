import '../styles/contact.css';
import Footer from './Footer';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';
import facebook from '../assets/SocialMedia/Facebook.png';
import linkedin from '../assets/SocialMedia/LinkedIn.png';

const socialMediaLinks = {
    facebook: {
        link: "https://web.facebook.com/ciaid.co?_rdc=1&_rdr",
        image: facebook,
        alt: "Facebook Icon"
    },
    linkedin: {
        link: "https://www.linkedin.com/company/ciaid/about/",
        image: linkedin,
        alt: "LinkedIn Icon"
    }
};

const Contact = () => {
    const { t } = useTranslation();

    return (

        <div id="contact" className='container-fluid m-0 p-0'>
            <Menu />
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h1 className='fw-bold mt-5'>Contacto</h1>
                <p className='text-center ps-5 pe-5 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquam placeat? Voluptate non odio tenetur, nesciunt id dolore aliquam ducimus cumque cupiditate fuga veritatis esse mollitia sit voluptatibus delectus nulla.</p>
            </div>
            <div id='formContact' className='d-flex flex-row justify-content-center align-content-center m-5 shadow'>
                <div id='contactInformation' className='col-6 bg-dark text-light p-4'>
                    <h3>Información de Contacto</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <ul className='list-unstyled'>
                        <li><p>+57 3145847409</p></li>
                        <li><p>juliangarciam13@gmail.com</p></li>
                        <li><p>Bogota DC, Colombia</p></li>
                    </ul>
                    <ul id='socialMedia' className='d-flex flex-row list-unstyled pt-1 align-items-center justify-content-center'>
                        {Object.entries(socialMediaLinks).map(([key, { link, image, alt }]) => (
                            <li key={key} className='social-item'>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <img src={image} alt={alt} className="icon" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='d-flex flex-column col-6 p-4'>
                    <form>
                        <div className='d-flex flex-column form-group'>
                            <label for='name'>Nombre</label>
                            <input type='text' id='name' placeholder='Julian' className='w-100' />
                        </div>
                        <div className='d-flex flex-column form-group'>
                            <label for='lastName'>Apellido</label>
                            <input type='text' id='lastName' placeholder='Garcia' className='w-100' />
                        </div>
                        <div className='d-flex flex-column form-group'>
                            <label for='email'>Correo Electrónico</label>
                            <input type='email' id='email' placeholder='ejemplo@gmail.com' className='w-100' />
                        </div>
                        <div className='d-flex flex-column form-group'>
                            <label for='phone'>Teléfono</label>
                            <input type='phone' id='phone' placeholder='+57 3145847409' className='w-100' />
                        </div>
                        <div className='d-flex flex-column form-group'>
                            <label for='message'>Mensaje</label>
                            <textarea type='text' id='message' placeholder='Hola, me gustaría...' className='w-100' />
                        </div>
                        <button type='submit' className='btn btn-dark mt-3'>Enviar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;