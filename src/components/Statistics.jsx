import AnimatedNumber from "../components/AnimatedNumber.jsx";
import '../styles/statistics.css';

const Statistics = () => {
    return (
        <div className='container-fluid d-flex flex-column align-items-center justify-content-center p-5' id='containerKpis'>
            <ul className='flex-row m-0 p-0 w-100 d-flex align-items-center justify-content-center ps-5 pe-5'>
                <li className='col-lg-2 col-md-4 col-sm-6 col-6 text-center d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fw-bold'>+<AnimatedNumber>22</AnimatedNumber></h1>
                    <h2 className='fw-bold'>Repositorios</h2>
                    <p>En Github</p>
                </li>
                <li className='col-lg-2 col-md-4 col-sm-6 col-6 text-center d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fw-bold'>+<AnimatedNumber>13</AnimatedNumber></h1>
                    <h2 className='fw-bold'>Skills</h2>
                    <p>Desarrollo/Diseño</p>
                </li>
                <li className='col-lg-2 col-md-4 col-sm-6 col-6 text-center d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fw-bold'>+<AnimatedNumber>18</AnimatedNumber></h1>
                    <h2 className='fw-bold'>Meses</h2>
                    <p>De Experiencia</p>
                </li>
                <li className='col-lg-2 col-md-4 col-sm-6 col-6 text-center d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fw-bold'>+<AnimatedNumber>10</AnimatedNumber></h1>
                    <h2 className='fw-bold'>Proyectos</h2>
                    <p>Realizados</p>
                </li>
                <li className='col-lg-2 col-md-4 col-sm-6 col-6 text-center d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fw-bold'>Marca</h1>
                    <h2 className='fw-bold'>Registrada</h2>
                    <p id='textIcontec'>Industria y Comercio</p>
                </li>
            </ul>
        </div>
    );
}

export default Statistics;