import React from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    company: "OCP Group",
    title: "Intern Software Engineer",
    description:
      "As a Intern Software Engineer at OCP Group, I played a pivotal role in developing innovative solutions for OCP's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    icon: "/ocpLogo.png", // Add an appropriate Google logo URL or use an inline SVG
    period: "OCT 2024 – APR 2025",
  },
  // {
  //   id: 2,
  //   company: "Youtube",
  //   title: "Software Engineer",
  //   description: "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  //   icon: "youtube-icon-url", // Add an appropriate YouTube logo URL or use an inline SVG
  //   period: "Jan 2017 – Oct 2019"
  // },
  // {
  //   id: 3,
  //   company: "Apple",
  //   title: "Junior Software Engineer",
  //   description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
  //   icon: "apple-icon-url", // Add an appropriate Apple logo URL or use an inline SVG
  //   period: "Jan 2016 – Dec 2017"
  // }
];

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <div className="mb-16 text-center text-4xl flex flex-row justify-center">
        <div className="mr-4">My</div>
        <h3 className="font-extrabold">Experience</h3>
      </div>

      <div className="experience-list space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="experience-item bg-black text-white p-6 border rounded-lg border-[#71717A] shadow-md flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <div>
                <div className="flex flex-row gap-8 justify-start">
                  <Image
                    src={exp.icon}
                    alt={`${exp.company} logo`}
                    width={32}
                    height={32}
                  />
                  <h3 className="text-[24px] font-semibold">
                    {exp.title} at {exp.company}
                  </h3>
                  <div className="text-right font-semibold text-[16px] justify-end ml-auto text-[#D4D4D8]">
                    <h6>{exp.period}</h6>
                  </div>
                </div>
                <p className=" text-sm text-[#D4D4D8] mt-6">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
