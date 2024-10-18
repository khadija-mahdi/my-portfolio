import Image from "next/image";
import SkillCard from "./SkillCard"; // Adjust the import path as needed

const skillIcons = {
  skill1: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5v-11h3v11h-3zm1.5-12.5c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
        fill="black"
      />
    </svg>
  ),
  skill2: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5v-11h3v11h-3zm1.5-12.5c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
        fill="black"
      />
    </svg>
  ),
  skill3: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5v-11h3v11h-3zm1.5-12.5c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
        fill="black"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex  justify-between items-center p-4">
        <div className="text-lg font-semibold flex items-center space-x-2 ">
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5294 12.2118C23.5294 16.8819 20.7623 20.9082 16.7793 22.7351C18.4612 21.3496 19.5322 19.248 19.5322 16.896C19.5322 12.7642 16.2259 9.40423 12.112 9.32046C12.0574 9.3167 12.0075 9.3167 11.9529 9.3167C11.8983 9.3167 11.8485 9.3167 11.7939 9.32046C10.2673 9.40328 9.05882 10.6663 9.05882 12.2108V26.6814C9.05882 31.4748 5.16988 35.3638 0.376465 35.3638V12.2118C0.376465 5.81928 5.56047 0.635284 11.9529 0.635284C18.3454 0.635284 23.5294 5.81928 23.5294 12.2118Z"
              fill="black"
            />
            <path
              d="M13.9992 14.2582C15.1294 13.128 15.1294 11.2956 13.9992 10.1654C12.8689 9.03515 11.0365 9.03515 9.90629 10.1654C8.77608 11.2956 8.77608 13.128 9.90629 14.2582C11.0365 15.3884 12.8689 15.3884 13.9992 14.2582Z"
              fill="black"
            />
          </svg>
          <div>Portfolio</div>
        </div>
        <nav className="space-x-7 text-[19px] font-bold">
          <a href="#about" className="hover:underline">
            About Me
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact Me
          </a>
        </nav>
        <button className="bg-black flex flex-row gap-2 text-white font-bold text-[14px] px-4 py-2 rounded">
          Resume
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </header>

      <div className=" p-10">
        <section className="flex flex-col text-black lg:flex-row items-center text-center lg:text-left">
          <div className="lg:w-[60%]">
            <h1 className=" text-5xl  font-light ">
              Hello, I’am <span className=" font-bold">Khadija Mahdi.</span>
            </h1>
            <h2 className="text-5xl font-light mt-2">
              <span className="font-bold">Software</span>{" "}
              <span className="font-bold outline-title">Engineer</span>
              <br />
              Student in <span className="font-bold">1337</span>.
            </h2>
            <p className="mt-4 text-gray-600">
              I’m a software developer honing my skills at 1337 School.
              Passionate about technology, I have a strong foundation in
              programming languages and problem-solving. I thrive on creating
              innovative solutions and am known for my adaptability, attention
              to detail, and commitment to delivering high-quality work.
            </p>
            {/* Skills Section */}
            <section className="flex justify-start space-x-6 mt-6 ">
              <a
                href="https://github.com/khadija-mahdi"
                target="_blank"
                rel="noopener noreferrer"
                className=" border-[1px] border-black h-10 w-10 rounded-lg grid place-content-center text-black font-bold hover:bg-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current text-black hover:text-white"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/khadija-mahdi"
                target="_blank"
                rel="noopener noreferrer"
                className=" border-[1px] border-black h-10 w-10 rounded-lg grid place-content-center text-black font-bold hover:bg-black"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-black hover:text-white"
                >
                  <title>LinkedIn icon</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:khadijamahdi6@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1px] border-black h-10 w-10 rounded-lg grid place-content-center text-black font-bold hover:bg-black"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-black hover:text-white"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
            </section>
          </div>
          <div className="lg:w-1/3 max-h-[630px] max-w-[630px] mt-5 lg:mt-0 lg:ml-auto">
            <Image
              src="/assets/banner.jpg"
              alt="Banner"
              width={400}
              height={200}
              layout="responsive"
            />
          </div>
        </section>
        <div className="pt-10" id="skills">
          <section>
            <h3 className="text-3xl font-bold mb-5 text-center">Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <SkillCard icon={skillIcons.skill1} name="Skill 1" />
              <SkillCard icon={skillIcons.skill2} name="Skill 2" />
              <SkillCard icon={skillIcons.skill3} name="Skill 3" />
              <SkillCard icon={skillIcons.skill1} name="Skill 4" />
              <SkillCard icon={skillIcons.skill2} name="Skill 5" />
              <SkillCard icon={skillIcons.skill3} name="Skill 6" />
              <SkillCard icon={skillIcons.skill1} name="Skill 7" />
              <SkillCard icon={skillIcons.skill2} name="Skill 8" />
              <SkillCard icon={skillIcons.skill3} name="Skill 9" />
              <SkillCard icon={skillIcons.skill1} name="Skill 10" />
              <SkillCard icon={skillIcons.skill2} name="Skill 11" />
              <SkillCard icon={skillIcons.skill3} name="Skill 12" />
              {/* Add more skills as needed */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
