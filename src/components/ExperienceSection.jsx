import { experiences } from "../scripts/data";

const ExperienceSection = () => {
    return (
        <section className="dark-section">
            <div id='experience' className='d-flex flex-column justify-content-center align-items-center pt-5'>
                <h2 id="titleExperience" className='fw-bold'>Experiencia</h2>
                <div className='d-flex justify-content-center'>
                    <ul className='list-unstyled d-flex flex-column justify-content-center align-items-center'>
                        {experiences.map((experience, index) => (
                            <li key={index} id="experienceSection" className='d-flex flex-column align-items-center m-3 col-10 justify-content-center'>
                                <div id="experienceImgTitle" className='d-flex flex-row w-100 align-items-center'>
                                    <img src={experience.img} alt={experience.name} className='mb-2' />
                                    <h3 className='ps-4'>{experience.job}</h3>
                                </div>
                                <p>{experience.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;