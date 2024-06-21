import { projects } from '../scripts/data';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const ProjectsSection = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/projects');
    };

    return (
        <section className="dark-section">
            <div id='projects' className='d-flex flex-column justify-content-center align-items-center pt-5'>
                <h2 className='fw-bold pb-3'>Proyectos</h2>
                <div className='projects-container d-flex flex-column'>
                    {projects.slice(0, 12).map((project, index) => (
                        <div key={index} className={`project-item d-flex flex-row align-items-center my-3 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                            <video autoPlay playsInline loop muted className='mb-2 w-50 mb-5 project-img' alt={project.title}>
                                <source src={project.video} type='video/mp4' />
                            </video>
                            <div id='textProjects' className={`d-flex flex-column text-start ${index % 2 === 1 ? 'pe-5' : 'ps-5'}`}>
                                <div id='titleProject'>
                                    <h2 className='fw-bold'>0{project.num}</h2>
                                    <h3>{project.title}</h3>
                                </div>
                                <p>{project.text}</p>
                                {project.isEcommerce ? (
                                    <NavLink to="/ecommerces">Ver todos los E-Commerce</NavLink>
                                ) : (
                                    <a id='linksProjects' href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <button className='btn btn-primary' onClick={handleNavigate}>Ver más proyectos</button>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;