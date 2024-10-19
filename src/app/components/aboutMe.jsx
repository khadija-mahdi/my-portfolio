import React from 'react';
import Image from "next/image";


const AboutMe = () => {
    return (
        <div className="text-black" id="about">

            <section className="flex flex-row text-black lg:flex-row justify-between text-center lg:text-left">
                <div className="lg:w-1/3 max-h-[630px] max-w-[630px] mt-5 lg:mt-0 lg:ml-auto">
                    <Image
                        src="/aboutImage.jpg"
                        alt="Banner"
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </div>
                <div className="lg:w-[60%] ml-16">
                    <div className="mb-16 text-start text-4xl flex flex-row">
                        <div className="mr-4">About</div>
                        <h3 className="font-extrabold">Me</h3>
                    </div>
                    <div className=" text-[#71717A]">
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
