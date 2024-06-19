import '../styles/skills.css';
import { skills } from '../scripts/data';

const Skills = () => {
    return (
        <div id='skills' className='d-flex flex-column justify-content-center align-items-center mt-5 pt-5'>
            <h2 className='fw-bold pb-3'>Skills</h2>
            <div className='d-flex justify-content-center'>
                <ul className='list-unstyled d-flex flex-wrap justify-content-center align-items-center col-12'>
                    {skills.map((skill, index) => (
                        <li key={index} className='skill-item d-flex flex-column align-items-center m-3 justify-content-center shadow'>
                            <img src={skill.img} alt={skill.name} className='skill-icon mb-2 w-50' />
                            <h3 className='fw-bold'>{skill.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills;