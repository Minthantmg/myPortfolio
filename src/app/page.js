import React from 'react';
import Home from "@/app/components/home";
import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Projects from "@/app/components/projects";
import Nav from "@/app/components/nav";

const Page = () => {
    return (
        <div>
            <Nav />
            <section id="home">
                <Home/>
            </section>
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default Page;