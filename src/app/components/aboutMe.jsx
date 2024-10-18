import React from 'react';
import Image from "next/image";


const AboutMe = () => {
    return (
        <div className="text-black" id="about">

            <section className="flex flex-row text-black lg:flex-row items-center  justify-center text-center lg:text-left">
                <div className="lg:w-1/3 max-h-[630px] max-w-[630px] mt-5 lg:mt-0 lg:ml-auto">
                    <Image
                        src="/aboutImage.jpg"
                        alt="Banner"
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-[60%]">
                    <h2 className="text-center text-4xl  mb-8">
                        About <span className="font-bold">Me</span>
                    </h2>
                    <div className="mt-4 ml-5 text-gray-600">
                        <p>
                            I’m a software developer honing my skills at 1337 School.
                            Passionate about technology, I have a strong foundation in
                            programming languages and problem-solving. I thrive on creating
                            innovative solutions and am known for my adaptability, attention
                            to detail, and commitment to delivering high-quality work.
                        </p>
                        <br />
                        <p>

                            I'm a passionate, self-proclaimed designer who specializes in
                            full stack development (React.js & Node.js).
                            I am very enthusiastic about bringing the technical and visual
                            aspects of digital products to life. User experience,
                            pixel perfect design, and writing clear, readable,
                            highly performant code matters to me.
                        </p>
                        <br />

                        <p>
                            I’m a software developer honing my skills at 1337 School.
                            Passionate about technology, I have a strong foundation in
                            programming languages and problem-solving. I thrive on creating
                            innovative solutions and am known for my adaptability, attention
                            to detail, and commitment to delivering high-quality work.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
