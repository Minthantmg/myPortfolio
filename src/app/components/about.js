import React, {useEffect} from 'react';
import photo from '../../../public/mac.jpg'
import Image from "next/image";

const About = () => {
    useEffect(() => {
        const fadeElems = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    entry.target.classList.add('show')
                }else{
                    entry.target.classList.remove('show')
                }
            })
        })
        fadeElems.forEach((el) => observer.observe(el))
    }, []);
    return (
        <div className="flex flex-col sm:flex-row justify-center w-full h-full bg-white dark:bg-dark dark:text-white pt-14 sm:pt-0 md:pl-4 md:pr-4">
            <div className="w-full max-w-5xl">
                <div className="flex flex-col sm:flex-row justify-center items-center w-full h-screen">
                    <div className="sm:w-1/2 ml-4 mr-4 sm:ml-0 sm:mr-0">
                        <Image src={photo} alt="" className="rounded-xl"/>
                    </div>
                    <div className="sm:w-1/2 sm:ml-10 ml-4 mr-2 sm:mr-0 text-black dark:text-white fade-in">
                        <div className="text-blue-600 font-bold mt-6 sm:mt-0">ABOUT ME</div>
                        <div className="text-[25px] font-bold sm:mt-2 mt-2">
                            Front-end Developer
                        </div>
                        <div className="text-[25px] font-bold fade-in">
                            based in Yangon, Myanmar
                        </div>
                        <div className="text-gray-600 text-[16px] sm:mt-4 mt-4 dark:text-white fade-in">
                            Hey, my name is Min Thant Mg, and I&apos;m a Frontend Developer. My passion is to create and
                            develop a clean UI/UX for my users.
                        </div>
                        <div className="text-gray-600 text-[16px] sm:mt-4 mt-4 dark:text-white fade-in">
                            I use React/Next.js and Tailwind CSS to create websites that are fast, functional, and
                            attractive. I also know how to work with HTML, CSS, JavaScript, TypeScript, and Sass, and
                            I’m always looking for new challenges and opportunities to grow as a developer.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;