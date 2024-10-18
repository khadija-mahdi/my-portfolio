import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'Ft_transcends Application',
            description:
                "I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image: '/trnst.jpg', // Replace with your project image path
        },
        {
            id: '02',
            title: 'Euphoria – Ecommerce (Apparels) Website Template',
            description:
                "I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image: '/webserv.jpg', // Replace with your project image path
        },
    ];

    return (
        <div className="projects-section bg-black text-white p-10">
            <h2 className="text-4xl mb-10 text-center">
                My <span className="font-bold">Projects</span>
            </h2>

            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`flex flex-col lg:flex-row items-center mb-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                    {/* Project Image */}
                    <div className="w-full lg:w-1/2 h-80 mb-5 lg:mb-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Project Content */}
                    <div className="w-full lg:w-1/2 lg:px-10">
                        <h3 className="text-2xl font-bold">{project.id}</h3>
                        <h4 className="text-xl mt-2">{project.title}</h4>
                        <p className="text-gray-400 mt-4">{project.description}</p>
                        <a
                            href="#"
                            className="mt-4 inline-block text-blue-400 underline"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
