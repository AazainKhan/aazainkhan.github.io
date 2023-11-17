import React, { useState } from 'react';
import WhatidoCards from './WhatidoCards';

function About() {
    const [showMore, setShowMore] = useState(false);

    const toggleMore = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };

    return (
        <>
            <article className="about active" data-page="about">
                <header>
                    <h2 className="h2 article-title">About me</h2>
                </header>
                <section className="about-text">
                <p>
                    Hi, My name is Aazain. I am a second-year software engineering student at
                    Centennial College in Toronto. I am interested in Full Stack development and
                    Machine Learning.
                </p>
                <p> 
                    I take an active interest in learning and leveraging software, design, and business to solve real-world problems. I enjoy experimenting with new and existing mediums to create my applications, artworks, and solutions.
                </p>
                <p>
                I am currently looking for summer 2024 internship opportunities. Feel free to reach out!
                </p>
                </section>
                <WhatidoCards />
            </article>
        </>
    );
}

export default About;
